const { uuidv4 } = require('../commands/uuidv4');
const fU = require('../events/fileUpload');
const { createCompletion, options } = require('../commands/createCompletion');
const { ChatMessage } = require('../classes/ChatMessage');
const message = document.getElementById('message');

module.exports = {
    User: {
        nickname: "You",
        username: "Matthew",
        id: uuidv4(),
        message: this.execute(),
        execute (param1, param2 = undefined) {
            new ChatMessage(this.username, param1)
            const attachment = {
                file: fU.uploadToServer(param2),
                attributes: fU.getAttributes(param2),
            };
            return { attachment, param1 };
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
        send () {
            new ChatMessage(this.username, this.message)
        }
    },
    execute (param1, param2 = undefined) {
        this.param1 = param1;
        this.param2 = param2;
        this.User.send();
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


