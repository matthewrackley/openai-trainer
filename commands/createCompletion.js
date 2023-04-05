const { openai } = require('../app');
const { User, botClient, userClient } = require('../classes/User.js');


module.exports = {
    createCompletion: async function (message) {
        let options = {
            model: "text-davinci-003",
            prompt: message,
            max_tokens: 7,
            stream: true,
            logprobs: null,
            stop: "\n\nThat's my answer, " + userClient.nickname + ".",
        };
        botClient.message = await openai.createCompletion(options);
        return botClient.message;
    },
};
