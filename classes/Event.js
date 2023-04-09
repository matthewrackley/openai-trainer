const path = require('path');
const hG = require('../events/hashGen');

module.exports = {
    Execution: {
        Execution: "Execution",
        path: path.resolve('../commands/'),
        key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err }),
    },
    Occurence: {
        name: "Occurence",
        path: path.resolve("../events/"),
        key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err }),
    },
    ClassCall: {
        name: "ClassCall",
        path: path.resolve("../classes/"),
        key: hG.keyGen().then((secureKey) => { return secureKey }).catch((err) => { return err }),
    },
    ApiCall: {
        name: "ApiCall",
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
    resolveLib (string) {
        let libraryPath = path.join(this.rootdir, string);
        if (this.library.includes(libraryPath)) {
            console.error(`The library ${ libraryPath } already exists!`);
            return this.library;
        } else {
            this.library.push(libraryPath);
            return this.library;
        }
    },
    execute (param1, param2) {

    }
};
