const extendMarkdown = require("./extendMarkdown.js");

module.exports = {
    title: 'Gruppe Adler Wiki',
    description: 'Gruppe Adler Wiki - Hier findest du alles von Organisationssturkur bis zu Taktikgelaber.',
    theme: 'gruppe-adler-theme',
    themeConfig: {
        sidebar: 'auto',
        repo: 'gruppe-adler/vuepress-wiki',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: 'Seite auf GitHub bearbeiten'
    },
    markdown: {
        'extendMarkdown': extendMarkdown
    }
}