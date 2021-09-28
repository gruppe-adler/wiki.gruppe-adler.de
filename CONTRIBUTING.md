# Contributing Guide

## Overview

This Wiki was build with Version 2 of VuePress ([docs](https://v2.vuepress.vuejs.org/)). Version 2 is currently (Sep. 2021) in Beta and differs a lot from Version 1, so **make sure you're only referring to docs for Version `2.x`.**

## Quick Start

First, install the dependencies:
```
npm ci
```

To the start the development server use:
```
npm run docs:dev
```

To build for production use
```
npm run docs:build
```
## Configuration
The `docs/.vuepress/` directory includes the whole configuration for the Wiki.

### `config.ts`
The `config.ts` file includes the core configuration. This includes title, description, plugins and much more. For more info refer to [VuePress's documentation](https://v2.vuepress.vuejs.org/reference/config.html) as well as the [documentation for the default theme configuration](https://v2.vuepress.vuejs.org/reference/default-theme/config.html).

### `public/`
The `public/` directory include all files which will just be copied over to the built directory and includes files like the [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) and Favicon.

### `plugins/`
This directory holds all custom plugins. We're currently using two custom plugins: 
- `wiki-index`: Adds a `/wiki-index` page which includes a list of all pages.
- `redirect-from-de`: Automatically redirects links with the prefix `/de/` to exclude the prefix (see the [README](./docs/.vuepress/plugins/redirect-from-de/README.md) for more info)

### `theme/`
The `theme/` directory includes our custom theme. The theme is built on top of (extends) the default theme and only does a few things differently / extra:
- Custom 404 Page
- Added `LandingPage`-Layout ([docs](https://v2.vuepress.vuejs.org/reference/frontmatter.html#layout))
- Added `GradGitHubLink`-Component (see below)
- Added Gruppe Adler Navbar
- Overwrite colors to match our branding ([docs](https://v2.vuepress.vuejs.org/reference/default-theme/styles.html#style-file))
- Added _Oswald_ and _Source Sans Pro_ fonts

#### `GradGitHubLink`-Component
The `GradGitHubLink`-Component adds a link to the GitHub repository configured within the theme config. You just need to pass the relative path to the `link`-Prop. The Component automatically prepends the repository. Additionally, you can access the docs directory and branch within your link:
- `:dir` will automatically be replaces by the `docsDir` value from the theme config ([docs](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#docsdir))
- `:branch` will automatically be replaces by the `docsBranch` value from the theme config ([docs](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#docsbranch))

```md
<GradGitHubLink link="/new/:branch/:dir/bastelstube">Neue Unterseite erstellen</GradGitHubLink>
```
will be replaced with:
```md
[Neue Unterseite erstellen](https://github.com/gruppe-adler/wiki.gruppe-adler.de/new/master/docs/bastelstube)
```

## GitHub Pages and Actions
This repository is automatically deployed to GitHub Pages via GitHub Actions. Every commit (any branch) triggers a build. Additionally, pushes to the `master` branch will also trigger a deployment to GitHub Pages.