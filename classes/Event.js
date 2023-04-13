const path = require('path');
const hG = require('../events/hashGen');

const Event = {
    Execution: {
        call (var1, var2) {
            //process some command here and return a value
        },
        path: path.resolve('../commands/'),
        key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err })
    },
    Occurence: {
        call (var1, var2) {
            //process some command here and return a value
        },
        path: path.resolve("../events/"),
        key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err }),
    },
    ClassCall: {
        call (var1, var2) {
            //process some command here and return a value
        },
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
    },
};

module.exports = {
    Event
};
