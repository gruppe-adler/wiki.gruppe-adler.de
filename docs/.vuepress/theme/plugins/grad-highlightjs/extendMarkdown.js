const highlightjs = require('markdown-it-highlightjs');

module.exports = md => {
    md.use(highlightjs, {auto: false, code: false});
}