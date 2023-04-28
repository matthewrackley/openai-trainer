const Event = require('../classes/Event')
module.exports = {
    execute (key, type) {
        if (key !== 'checkType') {
            return
        }
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
};

