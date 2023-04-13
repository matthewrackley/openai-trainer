const mariadb = require('mariadb');
const dotenv = require("dotenv");
dotenv.config();

const conn = mariadb.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'nodejs',
    password: process.env.NODEJS_DB_PASSWORD,
    database: 'UserInfo'
}).then((conn) => {
    return conn;
}).catch((err) => {
    console.log(err);
});

const cur = mariadb.createPool({ connectAttributes: { connectTimeout: 1000 } }); //** 1s */ mariadb.




module.exports = {
    uuidv4: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
};
