const { openai } = require('../app');
const { ChatMessage } = require('../classes/ChatMessage');

module.exports = {
    createCompletion: async (options) => {
        const response = await openai.createCompletion(options);
        openai.createCompletion(options);
        return response;
    },
    options (message) {
        let options = {
            model: "text-davinci-003",
            prompt: message,
            max_tokens: 7,
            stream: true,
            logprobs: null,
            stop: "\n\nThat's my answer.",
        };
        return options;
    },
};
