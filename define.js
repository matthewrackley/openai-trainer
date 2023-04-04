
//function checkType (type) {
function type () {
    new Map([
        ["id", "Identification"],
        ["identification", "Identification"],
        ["passport", "Identification"],
        ["license", "Identification"],
        ["phone", "Identification"],
        ["email", "Identification"],
        ["address", "Identification"],
        ["calendar", "Calendar"],
        ["date", "Calendar"],
        ["time", "Calendar"],
        ["schedule", "Calendar"],
        ["appointment", "Calendar"],
        ["event", "Calendar"],
        ["reminder", "Calendar"],
        ["url", "Web"],
        ["link", "Web"],
        ["website", "Web"],
        ["webpage", "Web"],
        ["site", "Web"],
        ["crypto", "Crypto"],
        ["encryption", "Crypto"],
        ["hash", "Crypto"],
        ["hashing", "Crypto"],
        ["password", "Crypto"],
        ["regex", "Crypto"],
        ["formula", "Crypto"],
        ["equation", "Crypto"],
        ["math", "Crypto"],
        ["algorithm", "Algorithm"],
        ["method", "Algorithm"],
        ["ui", "UI"],
        ["interface", "UI"],
        ["plugin", "UI"],
        ["extension", "UI"],
        ["package", "UI"],
        ["widget", "UI"],
        ["component", "UI"],
        ["module", "UI"],
        ["platform", "Platform"],
        ["library", "Platform"],
        ["api", "Platform"],
        ["framework", "Platform"],
        ["language", "Platform"],
        ["database", "Platform"],
        ["network", "Platform"],
        ["theme", "Platform"],
        ["template", "Platform"],
        ["codeblock", "Codeblock"],
        ["script", "Codeblock"],
        ["snippet", "Codeblock"],
        ["code", "Codeblock"],
        ["function", "Codeblock"],
        ["document", "Document"],
        ["note", "Document"],
        ["blog", "Document"],
        ["article", "Document"],
        ["text", "Document"],
        ["book", "Document"],
        ["paper", "Document"],
        ["report", "Document"],
        ["letter", "Document"],
        ["memo", "Document"],
        ["message", "Document"],
        ["post", "Document"],
        ["comment", "Document"],
        ["tutorial", "Reference"],
        ["guide", "Reference"],
        ["reference", "Reference"],
        ["manual", "Reference"],
        ["dataset", "Dataset"],
        ["data", "Dataset"],
        ["table", "Dataset"],
        ["model", "Dataset"],
        ["spreadsheet", "Dataset"],
        ["chart", "Graph"],
        ["diagram", "Graph"],
        ["visualization", "Graph"],
        ["graph", "Graph"],
        ["business", "Business"],
        ["profile", "Business"],
        ["brand", "Business"],
        ["company", "Business"],
        ["organization", "Business"],
        ["media", "Media"],
        ["photo", "Media"],
        ["video", "Media"],
        ["banner", "Media"],
        ["image", "Media"],
        ["art", "Design"],
        ["design", "Design"],
        ["animation", "Design"],
        ["drawing", "Design"],
        ["application", "Program"],
        ["software", "Program"],
        ["program", "Program"],
        ["sdk", "Program"],
        ["webapp", "Program"],
        ["tool", "Utility"],
        ["utility", "Utility"],
        ["service", "Utility"],
        ["device", "Utility"]
    ]);

};
function checkType (type) {
    let obj;
    if (type.includes("id") || type.includes("identification") || type.includes("passport") || type.includes("license") || type.includes("phone") || type.includes("email") || type.includes("address")) {
        obj = "Identification";
    } else if (type.includes("calendar") || type.includes("date") || type.includes("time") || type.includes("schedule") || type.includes("appointment") || type.includes("event") || type.includes("reminder")) {
        obj = "Calendar";
    } else if (type.includes("url") || type.includes("link") || type.includes("website") || type.includes("webpage") || type.includes("site")) {
    } else if (type.includes("crypto") || type.includes("encryption") || type.includes("hash") || type.includes("hashing") || type.includes("password") || type.includes("regex") || type.includes("formula") || type.includes("equation") || type.includes("math") || type.includes("algorithm")) {
        obj = "Crypto";
    } else if (type.includes("algorithm") || type.includes("method") || type.includes("regex") || type.includes("formula") || type.includes("equation") || type.includes("math")) {
        obj = "Algorithm";
    } else if (type.includes("ui") || type.includes("interface") || type.includes("plugin") || type.includes("extension") || type.includes("package") || type.includes("widget") || type.includes("component") || type.includes("module")) {
        obj = "UI";
    } else if (type.includes("platform") || type.includes("library") || type.includes("API") || type.includes("framework") || type.includes("language") || type.includes("database") || type.includes("network") || type.includes("theme") || type.includes("template")) {
        obj = "Platform";
    } else if (type.includes("codeblock") || type.includes("script") || type.includes("snippet") || type.includes("code") || type.includes("function")) {
        obj = "Codeblock";
    } else if (type.includes("document") || type.includes("note") || type.includes("blog") || type.includes("article") || type.includes("text") || type.includes("book") || type.includes("paper") || type.includes("report") || type.includes("letter") || type.includes("memo") || type.includes("message") || type.includes("post") || type.includes("comment")) {
        obj = "Document";
    } else if (type.includes("tutorial") || type.includes("guide") || type.includes("reference") || type.includes("book") || type.includes("manual") || type.includes("text")) {
        obj = "Reference";
    } else if (type.includes("dataset") || type.includes("data") || type.includes("table") || type.includes("model") || type.includes("spreadsheet")) {
        obj = "Dataset";
    } else if (type.includes("chart") || type.includes("diagram") || type.includes("visualization") || type.includes("graph")) {
        obj = "Graph";
    } else if (type.includes("business") || type.includes("profile") || type.includes("brand") || type.includes("company") || type.includes("organization")) {
        obj = "Business";
    } else if (type.includes("media") || type.includes("photo") || type.includes("video") || type.includes("banner") || type.includes("image")) {
        obj = "Media";
    } else if (type.includes("art") || type.includes("design") || type.includes("animation") || type.includes("drawing")) {
        obj = "Design";
    } else if (type.includes("application") || type.includes("software") || type.includes("program") || type.includes("SDK") || type.includes("webapp")) {
        obj = "Program";
    } else if (type.includes("tool") || type.includes("utility") || type.includes("service") || type.includes("device")) {
        obj = "Utility";
    } else {
        return "Invalid type!";
    }
    return obj;
};

console.log(checkType("tool"))

// class ParseTypes {
//     constructor () {
//         this.type = type;
//   }
// }
// const allowed = new ParseTypes();
// console.log(allowed.type)


        // function checkType(type) {
        //   const categories = Object.values(typeToCategory);
        //   const keys = Object.keys(typeToCategory);

        //   for (let i = 0; i < keys.length; i++) {
        //     if (type.includes(keys[i])) {
        //       return categories[i];
        //     }
        //   }

        //   return "Invalid type!";
        // }







//         let string;
//         // if ((string in type) === ([
//         "id",
//             "identification",
//             "passport",
//             "license",
//             "phone",
//             "email",
//             "address"
//     } this.obj = "Identification"; {
// } else if (type.includes("calendar", \n"date", \n"time", \n"schedule", \n"appointment", \n"event", \n"reminder")) {
//     obj = "Calendar";

//     "url", \n"link", \n"website", \n"webpage", \n"site")) {

//         "crypto", \n"encryption", \n"hash", \n"hashing", \n"password", \n"regex", \n"formula", \n"equation", \n"math", \n"algorithm")) {
//             obj = "Crypto";

//             "algorithm", \n"method", \n"regex", \n"formula", \n"equation", \n"math")) {
//                 obj = "Algorithm";

//                 "ui", \n"interface", \n"plugin", \n"extension", \n"package", \n"widget", \n"component", \n"module")) {
//                     obj = "UI";

//                     "platform", \n"library", \n"API", \n"framework", \n"language", \n"database", \n"network", \n"theme", \n"template")) {
//                         obj = "Platform";

//                         "codeblock", \n"script", \n"snippet", \n"code", \n"function")) {
//                             obj = "Codeblock";

//                             "document", \n"note", \n"blog", \n"article", \n"text", \n"book", \n"paper", \n"report", \n"letter", \n"memo", \n"message", \n"post", \n"comment")) {
//                                 obj = "Document";

//                                 "tutorial", \n"guide", \n"reference", \n"book", \n"manual", \n"text")) {
//                                     obj = "Reference";

//                                     "dataset", \n"data", \n"table", \n"model", \n"spreadsheet")) {
//                                         obj = "Dataset";

//                                         "chart", \n"diagram", \n"visualization", \n"graph")) {
//                                             obj = "Graph";

//                                             "business", \n"profile", \n"brand", \n"company", \n"organization")) {
//                                                 obj = "Business";

//                                                 "media", \n"photo", \n"video", \n"banner", \n"image")) {
//                                                     obj = "Media";

//                                                     "art", \n"design", \n"animation", \n"drawing")) {
//                                                         obj = "Design";

//                                                         "application", \n"software", \n"program", \n"SDK", \n"webapp")) {
//                                                             obj = "Program";

//                                                             "tool", \n"utility", \n"service", \n"device")) {
//                                                                 obj = "Utility";
//                                                             } else {
//                                                                 return "Invalid type!";

//                                                             }
//                                                             return obj;
//                                                             //};

//                                                             //class test {
//                                                             //constructor (type) {
//                                                             //this.string = string;
//                                                         })) {
//                                                             this.type = "Identification";
//                                                         } else {
//                                                             this.type
//                                                         }
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


// // function uuidv4 () {
// //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
// //         let r = Math.random() * 16 | 0,
// //             v = c == 'x' ? r : (r & 0x3 | 0x8);
// //         return v.toString(16);
// //     });
// // };


// // async function streamedData (stream) {
// //     try {
// //         const chunks = [];
// //         return new Promise((resolve, reject) => {
// //             stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
// //             stream.on('error', (err) => reject(err));
// //             stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
// //         });
// //     } catch (error) {
// //         console.error(error);
// //         throw error;
// //     }
// // };

// // module.exports = checkType, uuidv4, streamedData;

// type.includes()({
//     string = string.switch(key) {
//         get property (key)   =({

//         }string: ({
//             "date",
//             "calendar",
//             "schedule"})

//             break;

//         default:
// break;
//     }()(
//     "date",
//     "calendar",
//     "schedule",
//     "time",
//     "appointment",
//     "event",
//     "reminder")
// })
// 1: (this.string)
// };;}}}}}}))))))))
// return
// ////

// const Identification =


//     obj = "Calendar";
// let Url = [
//     "url",
//     "link",
//     "website",
//     "webpage",
//     "site"
// ]
// Url.includes(
//     message,
//     undefined)
// "url",
//     "link",
//     "website",
//     "webpage",
//     "site"

// type.includes("crypto", \n"encryption", \n"hash", \n"hashing", \n"password", \n"regex", \n"formula", \n"equation", \n"math", \n"algorithm")) {
//     obj = "Crypto";

//     type.includes("algorithm", \n"method", \n"regex", \n"formula", \n"equation", \n"math")) {
//         obj = "Algorithm";

//         type.includes("ui", \n"interface", \n"plugin", \n"extension", \n"package", \n"widget", \n"component", \n"module")) {
//             obj = "UI";

//             type.includes("platform", \n"library", \n"API", \n"framework", \n"language", \n"database", \n"network", \n"theme", \n"template")) {
//                 obj = "Platform";

//                 type.includes("codeblock", \n"script", \n"snippet", \n"code", \n"function")) {
//                     obj = "Codeblock";

//                     type.includes("document", \n"note", \n"blog", \n"article", \n"text", \n"book", \n"paper", \n"report", \n"letter", \n"memo", \n"message", \n"post", \n"comment")) {
//                         obj = "Document";

//                         type.includes("tutorial", \n"guide", \n"reference", \n"book", \n"manual", \n"text")) {
//                             obj = "Reference";

//                             type.includes("dataset", \n"data", \n"table", \n"model", \n"spreadsheet")) {
//                                 obj = "Dataset";

//                                 type.includes("chart", \n"diagram", \n"visualization", \n"graph")) {
//                                     obj = "Graph";

//                                     type.includes("business", \n"profile", \n"brand", \n"company", \n"organization")) {
//                                         obj = "Business";

//                                         type.includes("media", \n"photo", \n"video", \n"banner", \n"image")) {
//                                             obj = "Media";

//                                             type.includes("art", \n"design", \n"animation", \n"drawing")) {
//                                                 obj = "Design";

//                                                 type.includes("application", \n"software", \n"program", \n"SDK", \n"webapp")) {
//                                                     obj = "Program";

//                                                     type.includes("tool", \n"utility", \n"service", \n"device")) {
//                                                         obj = "Utility"
