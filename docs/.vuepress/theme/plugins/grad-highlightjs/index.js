const path = require('path');

module.exports = {
    name: '@gruppe-adler/vuepress-highlightjs',
    extendMarkdown: require('./extendMarkdown.js'),
    clientRootMixin: path.resolve(__dirname, './clientRootMixin.js')
}


