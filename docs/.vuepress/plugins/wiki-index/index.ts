import { PluginObject } from "vuepress";
import { App, createPage } from '@vuepress/core';
import { withSpinner } from '@vuepress/utils'
import emojiRegexFactory from 'emoji-regex';

const excludedPaths = ['/', '/404.html'];

const emojiRegex = emojiRegexFactory();

const stripEmoji = (str: string): string => {
    const s = str.replace(emojiRegex, '').trim();
    return s;
}

async function renderIndex(app: App) {
    await withSpinner('Generating Index')(async () => {
        const allPages = app.pages.map(p => ({ path: p.path, title: p.title }));
    
        const pagesStr = allPages
            .filter(p => !excludedPaths.includes(p.path))
            .map(p => ({ ...p, emojiLessTitle: stripEmoji(p.title) }))
            .sort((a, b): number => a.emojiLessTitle.localeCompare(b.emojiLessTitle))
            .map(({ path, title }) => `#### [${title || 'Seite ohne Name'}](${path})`)
            .join('\n');
    
        const indexPage = await createPage(app, {
            path: '/wiki-index',
            frontmatter: {
                sidebar: false,
                editLink: false,
                contributors: false,
                lastUpdated: false
            },
            content: `# 📑 Index\n${pagesStr}`
        })

        app.pages.push(indexPage);
    })
}

export default <PluginObject>{
    name: '@gruppe-adler/vuepress-plugin-wiki-index',
    onInitialized: renderIndex
};