const path = require('path');
const hashGen = require('../events/hashGen');

module.exports = {
    Execution: {
        name: "Execution",
        path: path.resolve('../commands/'),
        key: hashGen.GeneratedKey("ExecutionCreate"),
    },
    Occurence: {
        name: "Occurence",
        path: path.resolve("../events/"),
        key: hashGen.GeneratedKey("OccurenceCreate"),
    },
    ClassCall: {
        name: "ClassCall",
        path: path.resolve("../classes/"),
        key: hashGen.GeneratedKey("ClassCall"),
    },
    ApiCall: {
        name: "ApiCall",
        path: path.resolve("../api/gateway.js"),
        key: hashGen.GeneratedKey("ApiCall"),
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
