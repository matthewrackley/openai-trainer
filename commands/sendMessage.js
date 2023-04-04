const { User, userClient, botClient } = require('../classes/User');
const { createCompletion } = require('../app');



async function sendmessage () {
    if (id.includes(userClient.id))
}


module.exports = {
    sendMessage: new User(this.sendMessage)
    sendMessage: async function (message, userClient) {
        if (!userClient.ID) {
            let options = {
                model: "text-davinci-003",
                prompt: message,
                max_tokens: 7,
                stream: true,
                logprobs: null,
                stop: "\n\nThat's my answer, " + userClient.nickname + ".",
            };
            return options;
        } else if (User.ID == botClient.ID) {
            let response = await createCompletion(function (message,);
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
