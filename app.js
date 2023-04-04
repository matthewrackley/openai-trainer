const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
const { timeAndDate, uuidv4 } = require('./define.js');
const uploadFile = require('./fileUpload.js');
dotenv.config();
const apiKey = process.env.OPENAI_API_KEY;
const { userClient, botClient } = require('./classes/User')


function alert (condition, message) {
    this.condition = condition;
    this.message = message;
    var modal = document.getElementById("alert");
    var span = document.getElementsByClassName("close")[0];
    var p = document.getElementById("data");
    span.onclick = function () {
        modal.style.display = "close";
    };
};



if (!apiKey) {
    console.log("Please set your OpenAI API Key");
    let message = "Please set your OpenAI API Key";
    alert("APIKEY", `${ this.message }`);
};

const configuration = new Configuration({ apiKey });
export const openai = new OpenAIApi(configuration);


//const formDataEvent = document.getElementById('formDataEvent');
//formDataEvent.addEventListener('submit', `${ userClient.sendMessage() }`).then(userClient.chatMessage);


///////////////////////////////////////////////
export async function createCompletion (message) {
    let options = {
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 7,
        stream: true,
        logprobs: null,
        stop: "\n\nThat's my answer, " + userClient.nickname + ".",
    };
    const response = openai.createCompletion(options);
    return response;
};
/////////////////////////////////////////////

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


////////////////////////////////////////////
class User {
    constructor (sender, name) {
        this.sender = sender;
        this.name = name;
        // this.ID should be a UUID uniquely assigned to each User only while the tab
        // is open. It should be stored in sessionStorage and removed when the tab is
        // closed. This is to prevent users from impersonating other users.
        this.ID = uuidv4();
        sessionStorage.setItem('uuid', this.ID);
        window.addEventListener("beforeunload", function (_event) {
            sessionStorage.removeItem('uuid');
        });
        this.attachment = fileUpload().value;
        this.sendMessage = { sender: this.sender, content: this.sendMessage(), date: timeAndDate(), attachment: this.attachment || null };
        this.content = sendContent;
    };
    sendInfo () {

        const sender = this.sender;
        const name = this.name;
        const ID = this.ID;
        const message = this.name + ": " + this.message;

        return { sender, name, message, ID };
    };
    sendMessage (message) {
        if (this.ID === `${ userClient.ID }`) {
            let content = {
                name: this.name,
                ID: this.ID,
                date: timeAndDate(),
                message: message,
                attachment: uploadFile() || null
            }
            return content;
        } else if (this.ID === `${ chatAI.ID }`) {
            let content = {
                name: this.name,
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
    async chatMessage () {
        const chatArea = document.getElementById("chat-area");
        let newMessage = document.createElement("ul", process.stdout);
        this.message = newMessage.innerHTML = this.name + ": " + this.content.message;
        chatArea.appendChild(newMessage);
    };
};


