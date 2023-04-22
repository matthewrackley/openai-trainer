const directory = require('path');
const hG = require('../events/hashGen');

class Event {
    constructor (name, types, path) {
        this.name = name;
        this.types = types;
        this.path = directory.resolve(path);
        this.key = hG.gen.sec.key(this.name, 'hmac');
        this[name] = () => {
            console.log(` Executing ${ name }...`);
        }
    };
    name = (apiREF, values = undefined) => {
        apiREF(values = undefined);
    };
    execute() {
        this.name(this.types, this.path);
    };
};
class Library extends Event {
    constructor (command, name, types, path) {
        super(name, types, path);
        this[command] = () => {
            console.log(` Executing ${ command }...`);
        }
    };
};

const Execution = new Library('Execution', 'Execution', ['checkType', 'createCompletion', 'sendMessage', 'message', 'uuidv4'], '../commands/');
const Occurence = new Event('Occurence', ['ajaxRequest', 'cookies', 'showAlert', 'fileUpload', 'uriSwap', 'hashGen'], '../events/');
const ClassCall = new Event('ClassCall', ['User', 'ChatMessage', 'Ajax', 'Event', 'ReqHandler', 'userDB'], '../classes/');
const ApiCall = new Event('ApiCall', ['express', 'gateway', 'jsdocs', 'LocalDB', 'server'], '../apis/');

Execution;

Occurence.name;
Occurence.name();


// {
//     Execution = (command) => {
//         command; // process the value passed
//     };
//     Occurence = (command) => {
//         command; // process the value passed
//     };
//     ClassCall = (command) => {
//         command; // process the value passed
//     };
//     ApiCall = (command) => {
//         command; // process the value passed
//     };
// };


    // name: Execution,
    // nonce: hG.gen.nonce(),
    // key: await Execution.key,

// console.log(execute('BWAHAHA'));
// const keyGen = hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err });
// return
// //let Event = new event(name, path, key);
// switch (Event.name) {
//     case Execution:
//         //Event = new event('Execution', '../commands/', keyGen);
//         Event.Execution(command)
//         break;
//     case 'Occurence':
//         //Event = new event('Occurence', '../events', keyGen);
//         break;
//     case 'ClassCall':
//         //Event = new event('ClassCall', '../classes/', keyGen);
//         break;
//     case 'ApiCall':
//         //Event = new event('ApiCall', '.../api/', keyGen);
//         break;
//     default:
//         function execute (command) {
//             command; // process the value passed to execute
//         };
//         break;
// };
// //Event.Execution,
//         name =
//     Execution: (command) => {
//         command; // process the value passed
//     },
//     Name: 'Execution',
//     Execution: {
//         path: path.resolve('../commands/'),
//         key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err })
//     }
// };
//  {
//     Occurence: (command) => {
//         command; // process the value passed
//     },
//     Name: 'Occurence',
//     Occurence: {
//         path: path.resolve("../events/"),
//         key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err }),
//     }
// };
//     ClassCall: (command) => {
//         command;
//     },
//     Name: 'ClassCall',
//     ClassCall: {
//         path: path.resolve("../classes/"),
//         key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err }),
//     },
//     ApiCall: {
//         call (var1, var2) {
//             //process some command here and return a value
//         },
//         path: path.resolve("../api/gateway.js"),
//         key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err }),
//     },
//     generateArray () {
//         const arr = [];
//         for (let key in this) {
//             if (key !== 'generateArray') {
//                 arr.push({
//                     name: this[key].name,
//                     key: this[key].key
//                 });
//             }
//         }
//         return arr;
// };
// // const Event = {
// //     execute: (command) => {
// //         command; // process the value passed to execute
// //     },
// // };
// // Event.Execution,


// // module.exports = {
// //     Event
// // };
