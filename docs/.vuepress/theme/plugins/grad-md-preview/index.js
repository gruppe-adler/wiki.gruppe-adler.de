const path = require('path');

module.exports = {
    name: '@gruppe-adler/vuepress-plugin-md-preview',
    enhanceAppFiles: [
        path.resolve(__dirname, './register-components.js')
    ],
    extendMarkdown: require('./extendMarkdown.js')
}