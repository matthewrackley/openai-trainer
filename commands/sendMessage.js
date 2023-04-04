const { userClient, botClient } = require('../classes/User');

module.exports = {
    sendMessage: function (message, ID) {
        if (this.ID == userClient.ID) {
            let content = {
                name: this.nickname,
                ID: this.ID,
                date: timeAndDate(),
                message: message,
                attachment: uploadFile() || null
            }
            return content;
        } else if (this.ID === `${ botClient.ID }`) {
            let content = {
                name: this.nickname,
                ID: this.ID,
                date: new Date().toLocaleString(userTimeZone, {
                    hour12: true,
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                message: createCompletion(`${ userClient.sendMessage.content }`),
                attachment: uploadFile() || null
            }
            return content;
        } else {
            console.error("Error: User ID does not match");
        };
    };
