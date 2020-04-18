import sys
# sys.path.append("venv/lib/python3.6/site-packages/")
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import logging
logging.getLogger("tensorflow").setLevel(logging.ERROR)
from flask import Flask, request, json
import requests
import warnings
import time
import asyncio
# from rasa.core.channels.socketio import SocketIOInput
from rasa.core.agent import Agent
from rasa.utils.endpoints import EndpointConfig

warnings.filterwarnings(action='ignore', category=DeprecationWarning)
action_endpoint =EndpointConfig('http://localhost:5055/webhook')

async def get_response(message):
	responses = await agent.handle_message(message)
	return responses

loop = asyncio.get_event_loop()
app = Flask(__name__)


agent = Agent.load('rasa_backend/models/current', action_endpoint = action_endpoint)


@app.route('/time')
def get_current_time():
	return {'time': time.time()}

@app.route('/message', methods = ['POST'])
def get_rasa_response(serve_forever=True):
	
	message = request.json['message']
	r = loop.run_until_complete(get_response(message))
	response = ''
	for i in r:
		response += f"{i['text']}" + ' '

	print(response, file=sys.stderr)
	return {'response': response.strip()}


app.run()










