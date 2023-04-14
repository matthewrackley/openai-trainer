const directory = require('path');
const hG = require('../events/hashGen');

class Library {
    constructor (name, types, path) {
        this.name = name;
        this.types = types;
        this.path = directory.resolve(path);
        this.key = hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err });
    };
    name = (apiREF, values = undefined) => {
        apiREF(values = undefined);
    };
};
const Event = {
    Execution: new Library('Execution', ['checkType', 'createCompletion', 'sendMessage', 'message', 'uuidv4'], '../commands/'),
    Occurence: new Library('Occurence', ['fileUpload', 'hashGen'], '../events/'),
    ClassCall: new Library('ClassCall', ['User', 'ChatMessage', 'AJAX'], '../classes/'),

value.name = {[
    value = variable,
]}


let param = {
    _private: '',
    set name (value) {
        this._private = value;
    }
};
param.name = [name];

name = Event.Execution,
name = Event.Occurence,
name = Event.ClassCall,
name = Event.ApiCall

function execute (command) {
    command; // process the value passed to execute
};

console.log(execute);

console.log(execute('BWAHAHA'));


const newfunc = {
    name: Event.Execution,
    nonce: hG.gen.nonce(),
    key: Event.Execution.key,
    execute (variable, key) {
        this.key = key;
        key = Event.Execution.key;
}

const keyGen = hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err });
return
//let Event = new event(name, path, key);
switch (Event.name) {
    case Execution:
        //Event = new event('Execution', '../commands/', keyGen);
        Event.Execution(command)
        break;
    case 'Occurence':
        //Event = new event('Occurence', '../events', keyGen);
        break;
    case 'ClassCall':
        //Event = new event('ClassCall', '../classes/', keyGen);
        break;
    case 'ApiCall':
        //Event = new event('ApiCall', '.../api/', keyGen);
        break;
    default:
        function execute (command) {
            command; // process the value passed to execute
        };
        break;
};
//Event.Execution,
        name =
    Execution: (command) => {
        command; // process the value passed
    },
    Name: 'Execution',
    Execution: {
        path: path.resolve('../commands/'),
        key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err })
    }
};
 {
    Occurence: (command) => {
        command; // process the value passed
    },
    Name: 'Occurence',
    Occurence: {
        path: path.resolve("../events/"),
        key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err }),
    }
};
    ClassCall: (command) => {
        command;
    },
    Name: 'ClassCall',
    ClassCall: {
        path: path.resolve("../classes/"),
        key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err }),
    },
    ApiCall: {
        call (var1, var2) {
            //process some command here and return a value
        },
        path: path.resolve("../api/gateway.js"),
        key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err }),
    },
    generateArray () {
        const arr = [];
        for (let key in this) {
            if (key !== 'generateArray') {
                arr.push({
                    name: this[key].name,
                    key: this[key].key
                });
            }
        }
        return arr;
};
const Event = {
    execute: (command) => {
        command; // process the value passed to execute
    },
};
Event.Execution,


module.exports = {
    Event
};
