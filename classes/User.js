const { uuidv4 } = require('../commands/uuidv4');
require('../app')
const fU = require('../commands/fileUpload');
const { message } = require('../renderer');
const { createCompletion, options } = require('../commands/createCompletion');
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
    },
    send (id, info) {
        id = this.id;
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


