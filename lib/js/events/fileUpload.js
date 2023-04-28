const fs = require('fs').promises;
const path = require('path');


// Uploads the files to the Server
async function uploadToServer (file) {
    const { name, path: filePath } = file;
    const resolvedPath = path.resolve('/var/www/html', name);
    const stats = await fs.stat(filePath);
    if (stats.size > 1024 * 1024 * 256) {
        throw new Error("Total size is too large.\nAttachments must not exceed 256MB.");
    }
    if (resolvedPath.includes("/")) {
        const directories = resolvedPath.split('/');
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
    const data = await fs.readFile(filePath);
    await fs.writeFile(resolvedPath, data, 'binary');
    console.log('Your files have been uploaded!');
};

// Gets attributes from the uploaded files
async function getAttributes (filePath) {
    const stats = await fs.stat(filePath)
    const attributes =
    {
        fileName: path.basename(filePath),
        fileType: path.extname(filePath),
        fileSuffix: path.basename(filePath).split('.').pop(),
        fileSize: stats.size,
    };
    if (stats.size > 1024 * 1024 * 256) {
        throw new Error("Total size is too large.\nAttachments must not exceed 256MB.");
    } else {
        return attributes;
    };
};
module.exports = {
    uploadToServer,
    getAttributes,
};
