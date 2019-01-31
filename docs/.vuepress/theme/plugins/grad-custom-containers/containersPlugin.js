const container = require('markdown-it-container');

module.exports = md => {
    md.use(...createContainer('tip'));
    md.use(...createContainer('warning'));
    md.use(...createContainer('danger'));
    md.use(container, 'vue', {
        render: (tokens, idx) => tokens[idx].nesting === 1
            ? `<pre class="vue-container"><code>`
            : `</code></pre>`
    })
}

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
                    return `<grad-${tag} ${title}>\n`
                } else {
                    return `</grad-${tag}>\n`
                }
            }
        }
    ]
}