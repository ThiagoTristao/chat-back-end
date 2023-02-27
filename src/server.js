const express = require('express');
const chatMessageRoutes = require('./routes/chatMessage');
const cors = require('cors');

//start express and set the port
const app = express();
app.use(cors());
const PORT = 3333;

//use routes and dotenv
require('dotenv').config()
app.use(express.json());
app.use(chatMessageRoutes);

//listen the port
app.listen(PORT, error => {
  if (!error) {
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT,
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
