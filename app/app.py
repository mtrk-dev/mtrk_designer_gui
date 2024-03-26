from flask import Flask
from flask import render_template, request
import json

import os
import sys
path = os.path.abspath("mtrk_sdl_generator_anais")
sys.path.append(path)

from backendToUi import *
# from transform import *

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
            box_object["start_time"] = int(float(box_object['start_time'])*1000)

    configurations = data['configurations']
    block_structure = data['block_structure']
    block_to_loops = data['block_to_loops']
    block_number_to_block_object = data["block_number_to_block_object"]
    events = data['events']
    create_sdl_from_ui_inputs(block_to_box_objects, block_structure, block_to_loops, \
                              block_number_to_block_object, configurations, events)

def open_browser():
    webbrowser.open_new("http://127.0.0.1:5000")

# run the application
if __name__ == "__main__":
    # Uncomment this line if you want the webpage to open by default.
    # Timer(1, open_browser).start()
    app.run(debug=True)