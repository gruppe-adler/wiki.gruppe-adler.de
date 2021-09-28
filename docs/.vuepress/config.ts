import { path, fs } from '@vuepress/utils';

import type { SidebarItem } from '@vuepress/theme-default';
import type { AppOptions, DefaultThemeOptions, WebpackBundlerOptions } from 'vuepress';
import type { PwaPopupPluginOptions } from '@vuepress/plugin-pwa-popup';
import type { SearchPluginOptions } from '@vuepress/plugin-search';
import type { GoogleAnalyticsPluginOptions } from '@vuepress/plugin-google-analytics';

const CATEGORIES: Array<[string, string]> = [
    ['Bastelstube','/bastelstube/'],
    ['Infrastruktur','/infrastruktur/'],
    ['Organisatorisches','/organisatorisches/'],
    ['Taktik','/taktik/']
];

export default <Partial<AppOptions<DefaultThemeOptions, WebpackBundlerOptions>>>{
    title: 'Wiki - Gruppe Adler',
    description: 'Hier dokumentieren wir alles, was keiner liest, aber nicht verloren gehen soll. Unter anderem findest du Anleitung zu Missionsbau, Taktik und Infrastruktur.',
    lang: 'de',
    dest: './dist',
    source: '.',
    head: [
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ['meta', { name: 'theme-color', content: '#000000' }],
    ],
    alias: {
        '@assets': path.resolve(__dirname, '../assets/')
    },
    theme: path.resolve(__dirname, './theme'),
    themeConfig: {
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
        sidebar: CATEGORIES.reduce((acc, [text, link]) => ({ ...acc, [link]: getSidebarItems(text, link) }), {}),
        sidebarDepth: 1,

        tip: 'TIPP',
        warning: 'AUFGEPASST',
        danger: 'ACHTUNG'
    },
    markdown: {
        code: {
            lineNumbers: false
        }
    },
    plugins: [
        ['@vuepress/pwa', {}],
        ['@vuepress/plugin-pwa-popup', <PwaPopupPluginOptions>{
            locales: {
                '/': { message: 'Neuer Content ist verfügbar.', buttonText: 'Aktualisieren' }
            }
        }],
        ['@vuepress/plugin-search', <Partial<SearchPluginOptions>>{
            locales: { '/': { placeholder: '' }}
        }],
        ['@vuepress/plugin-google-analytics', <GoogleAnalyticsPluginOptions>{
              id: 'G-3NYJQ9NKJL',
        }],
        [path.resolve(__dirname, './plugins/wiki-index'), {}],
        [path.resolve(__dirname, './plugins/redirect-from-de'), {}]
    ]
};

function getSidebarItems(displayName: string, directory: string): (SidebarItem|string)[] {
    // find all md files
    let files = fs.readdirSync(path.resolve(__dirname, '..', directory.substr(1))).filter(file => /\.md$/i.test(file));

    // add readme to front
    let i = files.findIndex(f => f.match(/README\.md/i));
    if (i > -1) {
        files.splice(i, 1);
        files.unshift('README.md');
    }

    const children: Array<SidebarItem|string> = files.map(file => {
        if (file === 'README.md') return { text: '❔ Einleitung', link: directory };

        return `${directory}${file.slice(0, -3)}`;  // remove .md extension 
    });

    return [
        {
            text: displayName,
            children,
        }
    ];
}