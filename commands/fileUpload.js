const fs = require('fs');
const checkType = require('./checkType');
module.exports = {
    fileUpload: function () {
        const fs = require('fs');
        const checkType = require('./checkType');

        function getAttributes (file) {
            return new Promise((resolve, reject) => {
                const attributes = {
                    fileName: file.name,
                    fileType: file.type,
                    fileSuffix: file.name.split('.').pop(),
                    fileSize: file.size
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
        let fileInput = document.getElementById('fileInput') as HTMLInputElement;
        fileInput?.addEventListener('change', async (e) => {
            const files = fileInput.files;
            let count = 0;
            const recursiveHelper = async (files) => {
                if (count < files.length && count < 5) {
                    const file = files[count];
                    count++;
                    const attributes = await getAttributes(file);
                    if (file.files) {
                        await recursiveHelper(file.files);
                    }
                    await uploadToServer(file);
                    return attributes;
                }
            };
            await recursiveHelper(files);
        });
    },
};
