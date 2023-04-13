const { uuidv4 } = require('../commands/uuidv4');
const { createCompletion, options } = require('../commands/createCompletion');
const { ChatMessage } = require('../classes/ChatMessage');
const s = require('../api/gateway');
const fU = require('../events/fileUpload');


module.exports = {
    User: {
        nickname: "You",
        username: "Matthew",
        message: async () => {
            const UserMessage = new ChatMessage(module.exports.User.username, s.param1);
            fU.uploadToServer(s.param2);
            return UserMessage && module.exports.Bot.message();
        },
        id: uuidv4(),
        attachment: {
            fileName: s.param2,
            attributes: fU.getAttributes(s.param2),
        }
    },
    Bot: {
        nickname: "OpenAI",
        username: "OpenAI",
        id: uuidv4(),
        message: async () => {
            const response = await createCompletion(options(s.param1));
            const BotMessage = new ChatMessage(module.exports.Bot.username, response);
            return { response, BotMessage };
        },
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
    execute (param1, param2 = undefined) {
        const UserMessage = new ChatMessage(module.exports.User.username, param1);
        fU.uploadToServer(param2);
        return UserMessage && module.exports.Bot.message();
    },
};

// Create a new User object to represent the user/AI
// sending a message and the message itself


