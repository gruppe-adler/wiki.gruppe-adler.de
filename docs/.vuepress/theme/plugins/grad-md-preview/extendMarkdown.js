const container = require('markdown-it-container');

module.exports = md => {
    md.use(...createContainer('grad-md-preview', '|'));
    md.use(container, 'grad-md-preview__preview', {marker: '~'});
    md.use(container, 'grad-md-preview__code', {marker: '~'});
}

function createContainer (tag, marker) {
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
            },
            'marker': marker || ':'
        },
    ]
}