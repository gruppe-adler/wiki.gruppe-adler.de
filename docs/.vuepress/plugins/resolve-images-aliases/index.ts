import type { PluginObject } from 'vuepress';
import { path, getDirname } from '@vuepress/utils';
import * as MarkdownIt from 'markdown-it';

const __dirname = getDirname(import.meta.url);

export default {
    name: '@gruppe-adler/vuepress-plugin-resolve-images-aliases',
    extendsMarkdown: async (md: MarkdownIt, app) => {
        const userConfig =
            app.pluginApi.plugins.find(plugin => plugin.name === 'user-config') ??
            ({ name: 'user-config', alias: {} } as PluginObject);

        const aliasConfig = Object.entries(
            typeof userConfig.alias === 'function' ? await userConfig.alias(app, true) : userConfig.alias
        ) as [string, string][];

        md.use(instance => {
            const original = instance.renderer.rules.image;

            instance.renderer.rules.image = (tokens, idx, options, env, self) => {
                const token = tokens[idx];
                const src = token.attrGet('src');

                const aliasEntry = aliasConfig.find(([prefix]) => src.startsWith(prefix));

                if (aliasEntry) {
                    const [prefix, absPath] = aliasEntry;
                    token.attrSet('src', src.replace(prefix, absPath));
                }

                return original(tokens, idx, options, env, self);
            };
        });
    }
} satisfies PluginObject;
