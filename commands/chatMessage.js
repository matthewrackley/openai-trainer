const { User } = require('../classes/User');

module.exports = {
    chatMessage: async function (nickname, message) {
        nickname = User.nickname;
        const chatArea = document.getElementById("chat-area");
        const newMessage = document.createElement("ul");
        newMessage.innerHTML = this.nickname + ": " + this.message; // assuming this.name and this.content are available
        chatArea.appendChild(newMessage);
    }
};
