const path = require('path');
const hG = require('../events/hashGen');

module.exports = {
    Execution: {
        name: "Execution",
        path: path.resolve('../commands/'),
        key: hG.GeneratedKey(this.name),
    },
    Occurence: {
        name: "Occurence",
        path: path.resolve("../events/"),
        key: hG.GeneratedKey(this.name),
    },
    ClassCall: {
        name: "ClassCall",
        path: path.resolve("../classes/"),
        key: hG.GeneratedKey(this.name),
    },
    ApiCall: {
        name: "ApiCall",
        path: path.resolve("../api/gateway.js"),
        key: hG.GeneratedKey(this.name),
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
};
