## chat - BackEnd
<img src="https://freesvg.org/img/1538298822.png" width="300" height="200"/>
    
## Instal dependencies:
  First install the dependencies
  with the commands:
  NPM:
  ```
  npm install
  ```
  Yarn:
  ```
  yarn install
  ```
  ## Insert chat GPT key in .env:
  You need to create account and get api key from below link:
  ```
  https://platform.openai.com/account/api-keys
  ```
  Set chat GPT api key in the file .env
  ```
  API_KEY="YOUR_API_KEY"
  ```
  
## Running Project:

1. Running the back end
The back end was made with Node JS.
To running the project, run the command on terminal in root project folder:

NPM:
```
npm start
```

## Doing a request:

1. After run the project you need to send a post request to URL

URL:
```
http://localhost:3333/v1/chat/send-message
```

2. The body need to be a JSON. Send a body with a message

JSON:
```
{
	"message": "hello world"
}
```

## Project purpose
Made an app like a chat with reply for every incoming message (BackEnd).
