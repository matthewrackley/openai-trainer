const { Configuration, OpenAIApi } = require("openai");
const { Event } = require('../../classes/Event');
const dotenv = require("dotenv");
dotenv.config();
const apiKey = process.env.OPENAI_API_KEY;
const fs = require('fs');
const path = require('path');

function checkFunctionsInFolder (folderPath) {
    fs.readdir(folderPath, (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            if (filePath.endsWith('.js')) {
                const functions = require(filePath);
                for (let funcName in functions) {
                    if (typeof functions[funcName] === 'function') {
                        console.log(`Function ${ funcName } found in file ${ filePath }`);
                    }
                }
            }
        });
    });
}
let folderPath = [
    Event.ApiCall.path,
    Event.ClassCall.path,
    Event.Execution.path,
    Event.Occurence.path
];
checkFunctionsInFolder(folderPath);

function showAlert (message) {
    const modal = document.getElementById("modal");
    const data = document.getElementById("data");
    const span = document.getElementById("close");
    if (modal && span) {
        span.onclick = function () {
            modal.style.display = "none";
        };
    }
    if (data) {
        data.textContent = message;
        modal.style.display = "block";
    }
};

if (!apiKey) {
    showAlert("Your OpenAI API Key is not set.\nPlease provide it below.")
};


path.relative('./', '../commands').replace(/(\.)*(\\)*(\/)*(js)*/g, '')


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

// for (const file of classesFiles) {
//     const filePath = path.join(classesPath, file);
//     const _class = require(filePath);
//     if (classes.once) {
//         client.once(_class.name, (...args) => class._class(...args));
//     } else {
//         client.on(_class.name, (...args) => class._class(...args));
//     }
// }

