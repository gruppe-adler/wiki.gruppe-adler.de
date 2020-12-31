const path = require('path');
var fs = require('fs');

module.exports = {
    title: 'Wiki - Gruppe Adler',
    dest: './dist',
    base: '/wiki.gruppe-adler.de/',
    locales: {
        '/de/': {
            lang: 'de',
            description: 'Hier findest du alles von Organisationsstruktur, über Scripts, bis zu Taktikgelaber.'
        },
        '/en/': {
            lang: 'en-US',
            description: 'Hier findest du alles von Organisationsstruktur, über Scripts, bis zu Taktikgelaber.'
        },
    },
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ],
    themeConfig: {
        repo: 'gruppe-adler/wiki.gruppe-adler.de',
        editLinks: true,
        docsDir: 'docs',
        locales: {
            '/de/': {
                label: 'Deutsch',
                selectText: 'Sprachen',
                editLinkText: 'Diese Seite auf GitHub bearbeiten',
                lastUpdated: 'Als letztes geupdatet',
                nav: [
                    { text: 'Bastelstube', link: '/de/bastelstube/' },
                    { text: 'Infrastruktur', link: '/de/infrastruktur/' },
                    { text: 'Organisatorisches', link: '/de/organisatorisches/' },
                    { text: 'Taktik', link: '/de/taktik/' }
                ],
                sidebar: {
                    '/de/bastelstube/': getSidebarItems('Bastelstube', '/de/bastelstube'),
                    '/de/infrastruktur/': getSidebarItems('Infrastruktur', '/de/infrastruktur'),
                    '/de/organisatorisches/': getSidebarItems('Organisatorisches', '/de/organisatorisches'),
                    '/de/taktik/': getSidebarItems('Taktik', '/de/taktik')
                }
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated' ,
                nav: [
                    // { text: 'Bastelstube', link: '/en/bastelstube/' },
                    { text: 'Infrastructure', link: '/en/infrastruktur/' },
                    // { text: 'Organisatorisches', link: '/en/organisatorisches/' },
                    // { text: 'Taktik', link: '/en/taktik/' }
                ],
                sidebar: {
                    // '/en/bastelstube/': getSidebarItems('Bastelstube', '/en/bastelstube', '❔ Introduction'),
                    '/en/infrastruktur/': getSidebarItems('Infrastructure', '/en/infrastruktur', '❔ Introduction'),
                    // '/en/organisatorisches/': getSidebarItems('Organisatorisches', '/en/organisatorisches', '❔ Introduction'),
                    // '/en/taktik/': getSidebarItems('Taktik', '/en/taktik', '❔ Introduction')
                }
            }
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, '../assets/')
            }
        }
    },
    plugins: {
        '@vuepress/medium-zoom': {},
        '@vuepress/pwa': {
            serviceWorker: true,
            popupCompnent: 'grad-pwa-update',
            updatePopup: {
                '/de/': {
                    message: "Neuer Content ist verfügbar.",
                    buttonText: "Aktualisieren"
                },
                '/en/': {
                    message: "New content is available.",
                    buttonText: "Refresh"
                }
            }
        },
    }
}

function getSidebarItems(name, relativePath, intro) {

    // get all markdown files
    let files = fs.readdirSync(path.resolve(__dirname, `..${relativePath}`)).filter(f => f.match(/\.md$/i));
    
    // add readme to front
    let i = files.findIndex(f => f.match(/README\.md/i));
    if (i > -1) {
        files.splice(i, 1);
        files.unshift('README.md')
    }

    let sites = files.map(f => {
        if (f == 'README.md') return ['', intro || '❔ Einleitung'];

        return f.slice(0, -3); // remove .md extension 
    });

    return [
        {
            title: name,
            collapsable: false,
            children: sites
        }
    ]
}
