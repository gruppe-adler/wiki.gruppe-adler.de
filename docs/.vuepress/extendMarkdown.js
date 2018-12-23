const container = require('markdown-it-container');

module.exports = md => {
    md.use(...createContainer('grad-tip'));
    md.use(...createContainer('grad-warn'));
    md.use(...createContainer('grad-danger'));
};

function createContainer (tag) {
    return [
        container,
        tag,
        {
        render (tokens, idx) {
            let token = tokens[idx];
            let title = token.info.trim().slice(tag.length).trim();
            title = ((title || '') == '') ? '' : `title="${title}"`;

            if (token.nesting === 1) {
                return `<${tag} ${title}>\n`
            } else {
                return `</${tag}>\n`
            }
        }
      }
    ]
}