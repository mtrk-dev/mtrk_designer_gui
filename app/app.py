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
    # Sort the objects according to their start time.
    sorted_boxes = sorted(data['box_objects'], key=lambda x: int(float(x['start_time'])))
    configurations = data['configurations']
    # create_sdl_from_ui_inputs(sorted_boxes, configurations)
    create_sdl_from_ui_inputs(sorted_boxes)

def open_browser():
    webbrowser.open_new("http://127.0.0.1:5000")

# run the application
if __name__ == "__main__":
    # Uncomment this line if you want the webpage to open by default.
    # Timer(1, open_browser).start()
    app.run(debug=True)