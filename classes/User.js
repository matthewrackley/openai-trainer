const { uuidv4 } = require('../commands/uuidv4');
const fU = require('../events/fileUpload');
const { message } = require('../renderer');
const { createCompletion, options } = require('../commands/createCompletion');
const { ChatMessage } = require('../classes/ChatMessage')
const e = require('express');
module.exports = {
    User: {
        nickname: "You",
        username: "Matthew",
        id: uuidv4(),
        message: message,
        attachment: {
            file: fU.uploadToServer(),
            attributes: fU.getAttributes(),
        },
        send () {
            new ChatMessage(this.username, this.message)
        }
    },
    Bot: {
        nickname: "OpenAI",
        username: "OpenAI",
        id: uuidv4(),
        message: new Promise(resolve =>
            createCompletion(options(message))
                .then(resolve)),
        attachment: {
            file: fU.uploadToServer(),
            attributes: fU.getAttributes(),
        },
        send () {
            new ChatMessage(this.username, this.message)
        }
    },
    sendInfo (id, info) {
        this.id = id;
        switch (info) {
            case "username":
                return this.username;
            case "nickname":
                return this.nickname;
            case this.message && this.attachment:
                return info;
            case this.message:
                return info;
            case this.attachment:
                return info;
        };
    },

};

// Create a new User object to represent the user/AI
// sending a message and the message itself


