const { User, userClient, botClient } = require('../classes/User');
const { createCompletion } = require('../commands/createCompletion');

module.exports = {
    sendMessage: async function sendMessage (message, id) {
        JSON.parse(options)
        if (id === userClient.id) {
            JSON.parse
            userClient.sendMessage = (message) => createCompletion(message);
            userClient.async.sendMessage(message);
            return message;
        } else if (id == botClient.id) {
            botClient.sendMessage = await userClient.sendMessage();
            return botClient.sendMessage;
        } else {
            console.error("Error: User ID does not match");
        };
    },
};
