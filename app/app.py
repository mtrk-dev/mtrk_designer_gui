from flask import Flask
from flask import render_template, request, send_file, jsonify
import json
import traceback

import os
import sys
path = os.path.abspath("mtrk_designer_api")
sys.path.append(path)

from backendToUi import *

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