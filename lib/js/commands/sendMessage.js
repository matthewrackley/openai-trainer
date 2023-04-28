const { User, Bot } = require('../classes/User');
const { createCompletion, options } = require('../commands/createCompletion');
const { ChatMessage } = require('../classes/ChatMessage')
module.exports = {
    sendMessage: async function sendMessage (message, id) {
        JSON.parse(options)
        if (id === User.id) {
            JSON.parse
            User.sendMessage = (message) => createCompletion(message);
            User.async.sendMessage(message);
            return message;
        } else if (id == Bot.id) {
            Bot.sendMessage = await User.sendMessage();
            return Bot.sendMessage;
        } else {
            console.error("Error: User ID does not match");
        };
    },
};
