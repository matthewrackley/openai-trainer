const { ChatMessage } = require('../classes/ChatMessage');
const fU = require('../events/fileUpload');
const U = require('../classes/User');

module.exports = {
    execute (param1, param2 = undefined) {
        new ChatMessage(U.User.username, param1);
        fU.uploadToServer(param2);
        return U.Bot.send();
    },

}
