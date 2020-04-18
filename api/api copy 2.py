from flask import Flask
from flask_cors import CORS
from restinput import RestInput
app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
	return "Hello"

@app.route("/parse",methods=['POST'])
def chat():
	#some code to access the class on this route


if __name__ == "__main__":
	app.run(host='0.0.0.0')