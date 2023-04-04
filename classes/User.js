const { uuidv4 } = require('../commands/uuidv4');
const { fileUpload } = require('../commands/fileUpload')

module.exports = {
    User: class User {
        constructor (username, nickname) {
            this.username = username;
            this.nickname = nickname;
            // this.ID should be a UUID uniquely assigned to each User
            // We store it in session storage solely for learning.
            this.id = uuidv4();
            sessionStorage.setItem('uuid', this.ID);
            window.addEventListener("beforeunload", function (_event) {
                sessionStorage.removeItem('uuid');
            });
            this.attachment = fileUpload();
        };
        sendInfo (number, message) {
            const { nickname: name, id } = this;
            const response = { name, id, message };

            switch (number) {
                case 1:
                    return name;
                case 2:
                    return id;
                case 3:
                    return message;
                default:
                    return response;
            }
        };
    },
    userClient: new this.User('You', 'Matthew'),
    botClient: new this.User('OpenAI', 'OpenAI'),
};
// Create a new User object to represent the user/AI
// sending a message and the message itself


