import time
from flask import Flask, request, json
import requests
import warnings
# from rasa.core.channels.socketio import SocketIOInput
# from rasa.core.agent import Agent

app = Flask(__name__)
# action_endpoint = 'http://localhost:5005/webhooks/rest/webhook'

# # load your trained agent
# def rasa_agent():
# 	agent = Agent.load('rasa_backend/models/current', action_endpoint=action_endpoint)
# 	return agent

@app.route('/time')
def get_current_time():
	return {'time': time.time()}

@app.route('/message', methods = ['POST'])
def get_rasa_response():
	message = request.json['message']
	r = requests.post('http://localhost:5005/webhooks/rest/webhook', json={"sender": "sender", "message": message})
	

	response = ''
	for i in r.json():
		response += f"{i['text']}" + ' '

	print(response, message, 'AAAAAAAAAA\n\n\n\n\n')
	return {'response': response.strip()}

# @app.route('/respond', methods = ['POST'])
# def get_rasa_response(serve_forever=True):

# 	agent = Agent.load('rasa_backend/models/current', action_endpoint=action_endpoint)
	

# 	response = ''
# 	for i in r.json():
# 		response += f"{i['text']}" + ' '

# 	print(response, message, 'AAAAAAAAAA\n\n\n\n\n')
# 	return {'response': response.strip()}


if __name__ == '__main__':
	warnings.filterwarnings(action='ignore', category=DeprecationWarning)
















