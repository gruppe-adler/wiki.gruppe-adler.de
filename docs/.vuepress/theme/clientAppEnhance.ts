import { defineClientAppEnhance } from '@vuepress/client'
import GitHubLinkVue from './components/GitHubLink.vue';
import './styles/index.scss'

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.component('GradGitHubLink', GitHubLinkVue);

    if (!__VUEPRESS_SSR__) {
        import('./registerNavbar').then(({ registerNavbar }) => registerNavbar(router));
    };
});
