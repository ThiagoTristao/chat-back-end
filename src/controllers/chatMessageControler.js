const joi = require('joi');

const validateCreateUser = joi.object({
  message: joi.string().required(),
});

module.exports = {
  async sendMessage(req, res) {
    //validate the body
    const sendMessageValidationBody = validateCreateUser.validate(
      req.body,
    ).error;
    if (sendMessageValidationBody) {
      return res.status(401).json({
        error: sendMessageValidationBody.message,
      });
    }

    //use api key from .env
    const apiKeyChat = process.env.API_KEY;
    //get the message
    const message = req.body.message;
    //require and start chatGPT
    const {ChatGPTAPI} = await import('chatgpt');
    const api = new ChatGPTAPI({apiKey: apiKeyChat});
    //get reponse from chatGPT
    const response = await api.sendMessage(message);

    //return if contain a answer
    if (response.text) {
      return res.json({
        answer: response.text,
      });
    }
    //return if contain a error
    return res.status(401).json({
      error: 'Could not generate a response, please try again later.',
    })
  },
};
