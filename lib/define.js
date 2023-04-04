module.exports = {
    checkType: function (type) {
        const types = {
            identification: [
                "id",
                "identification",
                "passport",
                "license",
                "phone",
                "email",
                "address"
            ],
            calendar: [
                "calendar",
                "date",
                "time",
                "schedule",
                "appointment",
                "event",
                "reminder"
            ],
            crypto: [
                "crypto",
                "encryption",
                "hash",
                "hashing"
            ],
            algorithm: [
                "algorithm",
                "method",
                "regex",
                "formula",
                "equation",
                "math"
            ],
            ui: [
                "ui",
                "interface",
                "plugin",
                "extension",
                "package",
                "widget",
                "component",
                "module"
            ],
            platform: [
                "platform",
                "library",
                "API",
                "framework",
                "language",
                "database",
                "network",
                "theme",
                "template"
            ],
            codeblock: [
                "codeblock",
                "script",
                "snippet",
                "code",
                "function"
            ],
            document: [
                "document",
                "note",
                "blog",
                "article",
                "paper",
                "report",
                "letter"
            ],
            reference: [
                "tutorial",
                "guide",
                "reference",
                "book",
                "manual",
                "text"],
            dataset: [
                "dataset",
                "data",
                "table",
                "model",
                "spreadsheet"
            ],
            graph: [
                "chart",
                "diagram",
                "visualization",
                "graph"
            ],
            business: [
                "business",
                "profile",
                "brand",
                "company",
                "organization"
            ],
            media: [
                "media",
                "photo",
                "video",
                "banner",
                "image"
            ],
            design: [
                "art",
                "design",
                "animation",
                "drawing"
            ],
            program: [
                "application",
                "software",
                "program",
                "SDK",
                "webapp"
            ],
            utility: [
                "tool",
                "utility",
                "service",
                "device"
            ]
        };

        let obj;
        for (const key in types) {
            const typeArray = types[key];
            const isMatch = typeArray.some(word => type.includes(word));
            if (isMatch) {
                obj = key[0].toUpperCase() + key.slice(1);
                break;
            }
        }

        if (obj) {
            return obj;
        } else {
            return "Invalid type!";
        }
    },


    uuidv4: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    streamedData: async function (stream) {
        try {
            const chunks = [];
            return new Promise((resolve, reject) => {
                stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
                stream.on('error', (err) => reject(err));
                stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
            });
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    timeAndDate: new Date().toLocaleString(userTimeZone, {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
    }),

};
checkType("id"));
