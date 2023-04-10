const { ChatMessage } = require('../classes/ChatMessage');
const fU = require('../events/fileUpload');

module.exports = {
    execute (param1, param2 = undefined) {
        new ChatMessage(this.username, param1);
        fU.uploadToServer(param2);
        const attachment = {
            attributes: fU.getAttributes(param2),
        };
        return { param1, attachment };
    },
}
