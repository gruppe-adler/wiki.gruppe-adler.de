import { path } from '@vuepress/utils';
import type { ThemeObject } from 'vuepress';

export default <ThemeObject>{
    name: 'vuepress-theme-gruppe-adler',
    extends: '@vuepress/theme-default',
    layouts: {
        LandingPage: path.resolve(__dirname, 'layouts/LandingPage.vue'),
        404: path.resolve(__dirname, 'layouts/404.vue'),
    },
    clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
}