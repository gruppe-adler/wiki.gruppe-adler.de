import type { PluginObject } from 'vuepress';
import { path, getDirname } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url);

export default {
    name: '@gruppe-adler/vuepress-plugin-redirect-from-de',
    clientConfigFile: path.resolve(__dirname, './client.ts')
} satisfies PluginObject;
