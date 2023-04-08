const Event = require('../classes/Event');
console.log(Event.getName());

module.exports = {
    DB: class {
        constructor (dbName, dbVersion) {
            this.dbName = dbName;
            this.dbVersion = dbVersion;
        };
        async saveSession (commandArray) {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open(this.dbName, this.dbVersion);

                request.onerror = function (event) {
                    console.error("Error opening DB", event.target.errorCode);
                    reject(event.target.errorCode);
                };

                request.onupgradeneeded = function (event) {
                    const db = event.target.result;
                    // Create an object store to hold the session data
                    const objectStore = db.createObjectStore('commands', { keyPath: "Session", autoIncrement: true })
                    objectStore.createIndex('name', 'name');
                    objectStore.createIndex('hash', 'hash');
                };

                request.onsuccess = function (event) {
                    const db = event.target.result;

                    const transaction = db.transaction(["commands"], "readwrite");

                    transaction.onerror = function (event) {
                        console.error("Error saving commands", event.target.errorCode);
                        reject(event.target.errorCode);
                    };

                    transaction.oncomplete = function (event) {
                        console.log("Commands saved successfully");
                        resolve();
                    };

                    const objectStore = transaction.objectStore("Commands");

                    // Map the commands array to an array of promises that put each command into IndexedDB
                    for (let i = 0; i < commandArray.length; i++) {
                        const command = commandArray[i];
                        objectStore.add({ name: command.name, hash: command.hash })
                    }
                };
            });
        }
    },
    localDB: new this.DB('OpenAIDB', 1.05)
};
const gA = Event.generateArray();
const sessionID =
    Math.random()
        .toString(36)
        .substring(2, 15) +
    Math.random()
        .toString(36)
        .substring(2, 15);


module.exports = {
    Local: new DB("Local", 1.05),
};
