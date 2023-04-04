
const fs = require('fs');
const checkType = require('./checkType.js');

function getAttributes (file) {
    return new Promise((resolve, reject) => {
        const attributes = {
            fileName: file.name,
            fileType: file.type,
            fileSuffix: file.name.split('.').pop(),
            fileSize: file.size,
            fileCategory: checkType(file.type)
        };
        if (file.size > 1024 * 1024 * 256) {
            reject("Total size is too large!\nAttachments must not exceed 256MB!");
        } else {
            resolve(attributes);
        }
    });
};
async function uploadToServer (file) {
    if (file.name.includes("/")) {
        const directories = file.name.split('/');
        directories.pop();
        let directory = '/var/www/html';
        for (let i = 0; i < directories.length; i++) {
            directory = `${ directory }/${ directories[i] }`;
            if (!fs.existsSync(directory)) {
                fs.mkdirSync(directory);
            }
        }
    }
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            fs.writeFile(`/var/www/html/${ file.name }`, reader.result, 'utf8', err => {
                if (err) {
                    reject(err);
                } else {
                    resolve('Your files have been uploaded!');
                }
            });
        };
        reader.readAsBinaryString(file);
    });
};
