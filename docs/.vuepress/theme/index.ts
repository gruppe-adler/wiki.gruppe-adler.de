import { defaultTheme, DefaultThemeOptions } from '@vuepress/theme-default';
import { path, getDirname } from '@vuepress/utils';
import type { ThemeObject } from 'vuepress';

const __dirname = getDirname(import.meta.url)

export const gruppeAdlerTheme = (options: DefaultThemeOptions): ThemeObject => ({
    name: 'vuepress-theme-gruppe-adler',
    extends: defaultTheme(options),
    clientConfigFile: path.resolve(__dirname, 'client.ts'),
})
