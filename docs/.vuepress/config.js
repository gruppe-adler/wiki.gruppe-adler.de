const path = require('path');

module.exports = {
    title: 'Gruppe Adler Wiki',
    dest: './dist',
    locales: {
        '/de/': {
            lang: 'de',
            description: 'Hier findest du alles von Organisationssturkur bis zu Taktikgelaber.'
        },
        '/en/': {
            lang: 'en-US',
            description: 'Hier findest du alles von Organisationssturkur bis zu Taktikgelaber.'
        },
    },
    theme: 'gruppe-adler-theme',
    themeConfig: {
        sidebar: 'auto',
        repo: 'gruppe-adler/vuepress-wiki',
        editLinks: true,
        docsDir: 'docs',
        locales: {
            '/de/': {
                label: 'Deutsch',
                selectText: 'Sprachen',
                editLinkText: 'Diese Seite auf GitHub bearbeiten',
                lastUpdated: 'Als letztes geupdatet',
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated' ,
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, '../assets/')
            }
        }
    }
}