const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
const { timeAndDate, uuidv4 } = require('./commands/uuidv4');
const uploadFile = require('./fileUpload.js');
dotenv.config();
const apiKey = process.env.OPENAI_API_KEY;
const { userClient, botClient } = require('./classes/User')
const { chatMessage } = require('./commands/chatMessage');

if (!apiKey) {
    console.log("Please set your OpenAI API Key");
    let message = "Please set your OpenAI API Key";
    alert(message);
};

const configuration = new Configuration({ apiKey })

module.exports = {
    openai: new OpenAIApi(configuration),
};

const sendMessage = async function (message) {
    let options = {
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 7,
        stream: true,
        logprobs: null,
        stop: "\n\nThat's my answer, " + userClient.nickname + ".",
    };
    return options;
}

const classesPath = path.join(__dirname, 'classes');
const classesFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of classesFiles) {
    const filePath = path.join(classesPath, file);
    const class = require(filePath);
    if (classes.once) {
        client.once(class.name, (...args) => class.class(...args));
    } else {
        client.on(class.name, (...args) => class.class(...args));
    }
}

