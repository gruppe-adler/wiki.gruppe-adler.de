# `@gruppe-adler/vuepress-plugin-resolve-images-aliases`

This plugin ensures that the `alias` options from the user config is applied to images in markdown.

From the [Vuepress docs](https://v2.vuepress.vuejs.org/guide/assets.html#packages-and-path-aliases):

> Although it is not a common usage, you can reference images from dependent packages:
>
> ```bash
> npm install -D package-name
> ```
>
> Since markdown image syntax regards image links as relative paths by default, you need to use `<img>` tag:
>
> ```md
> <img src="package-name/image.png" alt="Image from dependency">
> ```
>
> The path aliases that set in config file are also supported:
>
> ```ts
> import { getDirname, path } from 'vuepress/utils';
>
> const __dirname = getDirname(import.meta.url);
>
> export default {
>     alias: {
>         '@alias': path.resolve(__dirname, './path/to/some/dir')
>     }
> };
> ```
>
> ```md
> <img src="@alias/image.png" alt="Image from path alias">
> ```
