const { ChatMessage } = require('../classes/ChatMessage');
const fU = require('../events/fileUpload');
const U = require('../classes/User');

module.exports = {
    message (param1, param2 = undefined) {
        new ChatMessage(U.User.username, param1);
        if (param2 !== undefined) {
            fU.uploadToServer(param2);
        };
        return U.Bot.message();
    },
}
