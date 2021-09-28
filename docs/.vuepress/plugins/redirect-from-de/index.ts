import { PluginObject } from "vuepress";
import { path } from '@vuepress/utils';

export default <PluginObject>{
    name: '@gruppe-adler/vuepress-plugin-redirect-from-de',
    clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
};