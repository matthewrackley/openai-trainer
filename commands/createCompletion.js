const { openai } = require('../app');
const u = require('../classes/User.js');
const { ChatMessage } = require('../classes/ChatMessage');

let options = {
    model: "text-davinci-003",
    prompt: u.User.UserClient.message,
    max_tokens: 7,
    stream: true,
    logprobs: null,
    stop: "\n\nThat's my answer, " + u.User.UserClient.nickname + ".",
};
async function createCompletion (options) {
    try {
        const response = await openai.createCompletion(options);
        openai.createCompletion(options);
        return response
    } catch (error) {
        console.error(error);
    };
};
module.exports = {
    UserMessage: options,
    BotMessage: this.BotMessage = new Promise((e) => (createCompletion(this.UserMessage))),
};
