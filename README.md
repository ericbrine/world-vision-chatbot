# World Vision Canada Chatbot with Front-end 

- This repo adds a front-end to the chatbot created for World Vision Canada as part of a U of T capstone project. The front-end chat interface is written in React. The chatbot created with Rasa is hosted on a Sanic server. 



## Running

To run the React front-end:
```
yarn start
```
To run the Sanic server:
```
yarn start-api
```

To run the rasa action server:
```
yarn start-actions
```



For the rasa model held in /api/rasa_backend:

## Training

To train the bot, run
```
rasa train
```
This will store a zipped model file in `models/`.

## Testing

Start the action server

```
rasa run actions
```

Then to chat with the bot on the command line, run
```
rasa shell [--debug]
```

or to use the voice assistant, run
```
rasa run actions
rasa run -m models --endpoints endpoints.yml
python run.py
```
## Interactive Learning

Start the action server

```
rasa run actions
```

Then for interactive learning on the command line
```
rasa interactive -m models --endpoints endpoints.yml --skip-visualization 
```


Check out the [documentation](http://rasa.com/docs/rasa/user-guide/command-line-interface/).


