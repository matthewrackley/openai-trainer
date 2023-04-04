const { openai } = require('../app');
const { userClient } = require('../classes/User.js');


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
        const response = await openai.createCompletion(options);
        return response
    },
};
