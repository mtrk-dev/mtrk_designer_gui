from flask import Flask
from flask import render_template, request
import json
from transform import *

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
    create_sdl_from_ui_inputs(sorted_boxes)
    return "Success"

# run the application
if __name__ == "__main__":
    app.run(debug=True)