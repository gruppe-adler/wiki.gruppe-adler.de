import { path, fs, getDirname } from '@vuepress/utils';
import type { SidebarItemOptions } from '@vuepress/theme-default';
import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { searchPlugin } from '@vuepress/plugin-search';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import wikiIndexPlugin from './plugins/wiki-index';
import redirectFromDePlugin from './plugins/redirect-from-de';
import resolveImageAliasesPlugin from './plugins/resolve-images-aliases';
import { gruppeAdlerTheme } from './theme';

const __dirname = getDirname(import.meta.url);

const CATEGORIES: Array<[string, string]> = [
    ['Bastelstube', '/bastelstube/'],
    ['Infrastruktur', '/infrastruktur/'],
    ['Organisatorisches', '/organisatorisches/'],
    ['Taktik', '/taktik/']
];

export default defineUserConfig({
    title: 'Wiki - Gruppe Adler',
    description:
        'Hier dokumentieren wir alles, was keiner liest, aber nicht verloren gehen soll. Unter anderem findest du Anleitung zu Missionsbau, Taktik und Infrastruktur.',
    lang: 'de',
    bundler: viteBundler(),
    head: [
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ['meta', { name: 'theme-color', content: '#000000' }]
    ],
    alias: {
        '@assets': path.resolve(__dirname, '../assets/'),
        '~@assets': path.resolve(__dirname, '../assets/')
    },

    theme: gruppeAdlerTheme({
        repo: 'gruppe-adler/wiki.gruppe-adler.de',
        docsBranch: 'master',
        docsDir: 'docs',

        editLink: true,
        editLinkText: 'Diese Seite bearbeiten',
        contributors: true,
        contributorsText: 'Bearbeiter',
        lastUpdated: true,
        lastUpdatedText: 'Zuletzt geändert',
        openInNewWindow: '(öffnet in neuem Fenster)',

        navbar: CATEGORIES.map(([text, link]) => ({ text, link })),
        sidebar: CATEGORIES.reduce((acc, [text, link]) => ({ ...acc, [link]: getSidebarItems(text, link) }), {
            '/wiki-index': [],
            '/404': [],
            '/': []
        }),
        sidebarDepth: 1,

        tip: 'TIPP',
        warning: 'AUFGEPASST',
        danger: 'ACHTUNG',
        themePlugins: {
            prismjs: {
                lineNumbers: false
            }
        }
    }),
    shouldPrefetch: false,
    plugins: [
        pwaPlugin({
            locales: {
                '/': {
                    install: 'Installieren',
                    iOSInstall: "Drücke den Share-Button und dann 'zu Homescreen hinzufügen'",
                    cancel: 'Abbrechen',
                    close: 'Schließen',
                    prevImage: 'Vorheriges Bild',
                    nextImage: 'Nächstes Bild',
                    desc: 'Beschreibung',
                    feature: 'Funktionen',
                    explain:
                        'Diese App kann auf Ihrem PC oder Mobilgerät installiert werden. Dadurch sieht diese Web-App aus und verhält sich wie jede andere installierte App. Sie finden sie in Ihren App-Listen und können sie an den Startbildschirm, die Startmenüs oder die Taskleisten anheften. Diese installierte Web-App kann auch sicher mit anderen Apps und Ihrem Betriebssystem interagieren.',
                    hint: 'Neuer Inhalt gefunden.',
                    update: 'Neue Inhalte sind verfügbar.'
                }
            }
        }),
        searchPlugin({
            locales: { '/': { placeholder: '' } }
        }),
        googleAnalyticsPlugin({
            id: 'G-3NYJQ9NKJL'
        }),
        wikiIndexPlugin,
        redirectFromDePlugin,
        resolveImageAliasesPlugin
    ]
});

function getSidebarItems(displayName: string, directory: string): (SidebarItemOptions | string)[] {
    // find all md files
    let files = fs.readdirSync(path.resolve(__dirname, '..', directory.substr(1))).filter(file => /\.md$/i.test(file));

    // add readme to front
    let i = files.findIndex(f => f.match(/README\.md/i));
    if (i > -1) {
        files.splice(i, 1);
        files.unshift('README.md');
    }

    const children: Array<SidebarItemOptions | string> = files.map(file => {
        if (file === 'README.md') return { text: '❔ Einleitung', link: directory };

        return `${directory}${file.slice(0, -3)}`; // remove .md extension
    });

    return [
        {
            text: displayName,
            children
        }
    ];
}
