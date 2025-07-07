from flask import Flask
from flask import render_template, request, send_file, jsonify
import json
import traceback

import os
import numpy as np
import sys
path = os.path.abspath("mtrk_designer_api")
sys.path.append(path)
sys.path.append(os.path.join(path, "ReadoutBlocks"))

from backendToUi import create_sdl_from_ui_inputs
from readoutBlockGenerator import automaticReadoutBlockGenerator
from mtrkToPulseqConverter import mtrkToPulseqConverter
from simpleWaveformGenerator import trap_grad, min_trap_grad, ramp_sampled_trap_grad, pulse_designer

import webbrowser
from threading import Timer

app = Flask(__name__)

@app.route("/")
def index():
    message = {}
    return render_template('index.html', message=message)

@app.route('/process', methods=['POST'])
def process():
    data = json.loads(request.data, strict=False)

    # Convert the start time from ms to us and sort the boxes with start time.
    block_to_box_objects = data["block_to_box_objects"]
    for block_name in block_to_box_objects:
        block_boxes = block_to_box_objects[block_name]
        block_boxes = sorted(block_boxes, key=lambda x: int(float(x['start_time'])*1000))
        for box_object in block_boxes:
            box_object["start_time"] = int(round(float(box_object['start_time'])*1000))

    configurations = data['configurations']
    block_structure = data['block_structure']
    block_to_loops = data['block_to_loops']
    block_to_duration = data["block_to_duration"]
    block_number_to_block_object = data["block_number_to_block_object"]
    events = data['events']

    # embed events in the block to box objects.
    for block_name in events:
        block_events = events[block_name]
        for event in block_events:
            event_object = {"axis": "event"}
            for key in event:
                if key == "bsPlacement" or key == "bsToggle":
                    continue
                if key == "eventType":
                    event_object["type"] = event[key]
                else:
                    event_object[key] = event[key]
            block_to_box_objects[block_name].append(event_object)

    create_sdl_from_ui_inputs(block_to_box_objects, block_structure, block_to_loops, \
                              block_to_duration, block_number_to_block_object, configurations)

    if os.path.isfile("output.mtrk"):
       return send_file('output.mtrk')

@app.route('/convert', methods=['GET'])
def convert():
    # can simply use the last generated output.mtrk as input.
    mtrkToPulseqConverter(fileToConvert = "output.mtrk", outputFile = "output.seq")

    if os.path.isfile("output.seq"):
        return send_file('output.seq')

@app.route('/update', methods=['POST'])
def update():
    data = json.loads(request.data, strict=False)
    configurations = data['configurations']
    info = data['update_info']
    insertion_block = info['parent_block']
    previous_block = info['previous_block']
    block_name = info['block_name']

    readoutList = ["cartesian", "radial", "spiral", "epi"]
    readoutType = None
    for readout in readoutList:
        if readout in block_name.lower():
            readoutType = readout
            break
    if readoutType is None:
        return jsonify({"error": "Invalid readout type in block name"}), 400

    # can simply use the last generated output.mtrk as input.
    automaticReadoutBlockGenerator(readoutType = readoutType, inputFilename = "output.mtrk",
                            insertion_block = insertion_block, previous_block = previous_block)

    if os.path.isfile("updated_sdl.mtrk"):
       return send_file('updated_sdl.mtrk')

@app.route('/waveform', methods=['POST'])
def generate_waveform():
    waveform_data = json.loads(request.data, strict=False)
    event_type = waveform_data.get("event_type", "")
    waveform_type = waveform_data.get("waveform_type", "")

    if not event_type or not waveform_type:
        return jsonify({"error": "event_type and waveform_type are required"}), 400

    generated_waveform = None
    if event_type == "gradient":
        if waveform_type == "trap":
            ramp_up = waveform_data.get("ramp_up_time")
            ramp_down = waveform_data.get("ramp_down_time")
            plateau = waveform_data.get("plateau_time")
            dt = waveform_data.get("dt")
            generated_waveform, ampl, ramp_up_time, ramp_down_time, plateau_duration = trap_grad(ramp_up, ramp_down, plateau, dt)
        elif waveform_type == "min_trap":
            area = waveform_data.get("input_area")
            gmax = waveform_data.get("input_gmax")
            slew = waveform_data.get("input_slew")
            dt = waveform_data.get("dt")
            generated_waveform, ampl, ramp_up_time, ramp_down_time, plateau_duration = min_trap_grad(area, gmax, slew, dt)
        elif waveform_type == "ramp_sampled":
            area = waveform_data.get("input_area")
            gmax = waveform_data.get("input_gmax")
            slew = waveform_data.get("input_slew")
            dt = waveform_data.get("dt")
            generated_waveform, ampl, ramp_up_time, ramp_down_time, plateau_duration = ramp_sampled_trap_grad(area, gmax, slew, dt)
    elif event_type == "rf":
        if waveform_type == "slr":
            tb = waveform_data.get("tb")
            n_samples = waveform_data.get("n_samples")
            d1 = waveform_data.get("d1")
            d2 = waveform_data.get("d2")
            p_type = waveform_data.get("p_type")
            f_type = waveform_data.get("f_type")
            # generated_waveform, phase = pulse_designer("slr", [8, 512, 0.01, 0.01, 'ex', 'ls'])
            generated_waveform, phase = pulse_designer("slr", [tb, n_samples, d1, d2, p_type, f_type])
        elif waveform_type == "sinc":
            n_samples_sinc = waveform_data.get("n_samples_sinc")
            m_lobes_sinc = waveform_data.get("m_lobes_sinc")
            # generated_waveform, phase = pulse_designer("sinc", [64, 2])
            generated_waveform, phase = pulse_designer("sinc", [n_samples_sinc, m_lobes_sinc])
        elif waveform_type == "adiabatic":
            adiabatic_type = waveform_data.get("adiabatic_type")
            n_samples_adiabatic = waveform_data.get("n_samples_adiabatic")
            if adiabatic_type == "bir4":
                beta_adiabatic_bir4 = waveform_data.get("beta_adiabatic_bir4")
                kappa_adiabatic_bir4 = waveform_data.get("kappa_adiabatic_bir4")
                theta_adiabatic_bir4 = waveform_data.get("theta_adiabatic_bir4")
                dw0_adiabatic_bir4 = waveform_data.get("dw0_adiabatic_bir4")
                # generated_waveform, phase = pulse_designer("adiabatic", ['bir4', 512, 10, np.arctan(20), np.pi/4, 100*np.pi/1e-5/512])
                generated_waveform, phase = pulse_designer("adiabatic",
                ['bir4', n_samples_adiabatic, beta_adiabatic_bir4, kappa_adiabatic_bir4, theta_adiabatic_bir4, dw0_adiabatic_bir4])
            elif adiabatic_type == "wurst":
                n_fac_adiabatic_wurst = waveform_data.get("n_fac_adiabatic_wurst")
                bw_adiabatic_wurst = waveform_data.get("bw_adiabatic_wurst")
                dur_adiabatic_wurst = waveform_data.get("dur_adiabatic_wurst")
                # generated_waveform, phase = pulse_designer("adiabatic", ['wurst', 512, 40, 40e3, 2e-3])
                generated_waveform, phase = pulse_designer("adiabatic",
                ['wurst', n_samples_adiabatic, n_fac_adiabatic_wurst, bw_adiabatic_wurst, dur_adiabatic_wurst])
            elif adiabatic_type == "hyperbolic":
                beta_adiabatic_hyperbolic = waveform_data.get("beta_adiabatic_hyperbolic")
                mu_adiabatic = waveform_data.get("mu_adiabatic")
                dur_adiabatic_hyperbolic = waveform_data.get("dur_adiabatic_hyperbolic")
                # generated_waveform, phase = pulse_designer("adiabatic", ['hyperbolic', 512, 800, 4.9, 0.012])
                generated_waveform, phase = pulse_designer("adiabatic",
                ['hyperbolic', n_samples_adiabatic, beta_adiabatic_hyperbolic, mu_adiabatic, dur_adiabatic_hyperbolic])
        else:
            return jsonify({"error": "Invalid waveform type"}), 400

    generated_waveform = np.squeeze(generated_waveform).tolist()
    if not generated_waveform:
        return jsonify({"error": "Could not generate waveform. Verify params!"}), 400
    if 'phase' in locals():
        phase = np.squeeze(phase).tolist()

    generated_waveform_data = {
        "waveform": generated_waveform,
        "amplitude": ampl if 'ampl' in locals() else None,
        "ramp_up_time": ramp_up_time if 'ramp_up_time' in locals() else None,
        "ramp_down_time": ramp_down_time if 'ramp_down_time' in locals() else None,
        "plateau_duration": plateau_duration if 'plateau_duration' in locals() else None,
        "phase": phase if 'phase' in locals() else None
    }
    return jsonify(generated_waveform_data), 200

@app.route('/get_port_mapping', methods=['GET'])
def get_port_mapping():
    port_mapping_file = '/opt/port_mappings.json'
    if os.path.exists(port_mapping_file):
        with open(port_mapping_file, 'r') as file:
            port_mapping = json.load(file)
        return jsonify(port_mapping)
    else:
        return jsonify({"error": "Port mapping file not found"}), 404

@app.errorhandler(Exception)
def handle_exception(e):
    response = {
        "error": str(e),
        "type": type(e).__name__,
        "traceback": traceback.format_exc()
    }
    return jsonify(response), 500

def open_browser():
    webbrowser.open_new("http://127.0.0.1:5000")

# run the application
if __name__ == "__main__":
    # Uncomment this line if you want the webpage to open by default.
    # Timer(1, open_browser).start()
    app.run(debug=True, port=5010)