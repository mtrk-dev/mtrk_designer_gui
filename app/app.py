from flask import Flask
from flask import render_template, request
import json

app = Flask(__name__)

@app.route("/")
def index():
    message = {}
    return render_template('index.html', message=message)

@app.route('/process', methods=['POST'])
def process():
    data = json.loads(request.data, strict=False)
    return "Success"

# run the application
if __name__ == "__main__":
    app.run(debug=True)