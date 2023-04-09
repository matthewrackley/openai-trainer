const fs = require('fs').promises;
const path = require('path');

module.exports = {
    // Gets attributes from the uploaded files
    async getAttributes ({ name, type, size }) {
        const attributes = {
            fileName: name,
            fileType: type,
            fileSuffix: name.split('.').pop(),
            fileSize: size,
        };
        if (size > 1024 * 1024 * 256) {
            throw new Error("Total size is too large!\nAttachments must not exceed 256MB!");
        } else {
            return attributes;
        }
    },

    // Uploads the files to the Server
    async uploadToServer (file) {
        const { name } = file;
        const filePath = path.resolve('/var/www/html', name);
        if (file.name.includes("/")) {
            const directories = file.name.split('/');
            directories.pop();
            let dirPath = '/var/www/html';
            for (let i = 0; i < directories.length; i++) {
                dirPath = `${ dirPath }/${ directories[i] }`;
                await fs.mkdir(dirPath).catch(err => {
                    if (err.code !== 'EEXIST') {
                        throw err;
                    }
                });
            }
        }
        const data = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            if (typeof Blob !== 'undefined') {
                reader.readAsBinaryString(file);
            } else {
                reader.readAsArrayBuffer(file);
            }
        });
        if (typeof data === 'string') {
            await fs.writeFile(filePath, data, 'utf8');
        } else if (data instanceof ArrayBuffer) {
            await fs.writeFile(filePath, Buffer.from(data));
        } else {
            throw new Error('Failed to write file: invalid data');
        }
        return 'Your files have been uploaded!';
    },
};
