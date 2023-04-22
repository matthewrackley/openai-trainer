/**
 * This is where we setup the main class that is to
 * be used by the webserver to generate new users.
 */
const uuidv4 = require('../commands/uuidv4');
const dotenv = require("dotenv");
dotenv.config();

class User {
    constructor(username, password, email, firstname, lastname, phonenumber) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
    }
    get fullname () {
        return this.firstname + ' ' + this.lastname;
    }
}
