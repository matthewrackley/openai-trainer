class DB {
    constructor (dbVersion) {
        this.dbName = "LocalDB";
        this.dbVersion = dbVersion;
        this.db = null;
    };
    // open {#fff, 10}
    open () {
        const request = indexedDB.open(this.dbName, this.dbVersion);
        request.onerror = function (event) {
            console.error("Error opening DB", event.target.error);
        };
        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            // Create an object store to hold the hashed values
            const store = db.createObjectStore("hashedValues", { keyPath: "sessionID" });
        };
        request.onsuccess = function (event) {
            const db = event.target.result;
            console.log("Database opened successfully");
        }.bind(this);
    };

    insert (sessionID, value) {
        if (!this.db) {
            console.error("Database is not open");
            return;
        }
        const transaction = this.db.transaction(["hashedValues"], "readwrite");
        const objectStore = transaction.objectStore("hashedValues");
        objectStore.put({ sessionID: sessionID, value: value });
        transaction.oncomplete = function (event) {
            console.log("Hashed value stored successfully");
        };
    };
}
const LocalDB = new DB(1);



// request.onerror = function (event) {
//     console.error("Error opening DB", event.target.errorCode);
// };

// request.onupgradeneeded = function (event) {
//     const db = event.target.result;
//     // Create an object store to hold the hashed values
//     const store = db.createObjectStore("hashedValues", { keyPath: "sessionID" });
// };

// request.onsuccess = function (event) {
//     const db = event.target.result;

//     // Create a transaction and access the object store
//     const sessionID = "ABC123";
//     const hashedValue = "abc456def";

//     const transaction = db.transaction(["hashedValues"], "readwrite");
//     const objectStore = transaction.objectStore("hashedValues");

//     objectStore.put({ sessionID: sessionID, value: hashedValue });

//     transaction.oncomplete = function (event) {
//         console.log("Hashed value stored successfully");
//     };
// };
