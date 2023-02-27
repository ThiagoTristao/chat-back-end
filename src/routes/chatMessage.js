const express = require('express');
const chatMessageControler = require('../controllers/chatMessageControler');

//use router from express
const chatMessage = express.Router();

//define post router to send a message
chatMessage.post('/v1/chat/send-message', chatMessageControler.sendMessage);

module.exports = chatMessage;
