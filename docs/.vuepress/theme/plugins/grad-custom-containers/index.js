const path = require('path');

module.exports = {
    enhanceAppFiles: [
        path.resolve(__dirname, './register-components.js')
    ],
    extendMarkdown: require("./extendMarkdown.js")
}