import { defineClientConfig } from '@vuepress/client'
import LandingPage from './layouts/LandingPage.vue'
import NotFound from './layouts/404.vue'
import GitHubLinkVue from './components/GitHubLink.vue';
import './styles/index.scss'

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component('GradGitHubLink', GitHubLinkVue);

        if (!__VUEPRESS_SSR__) {
            import('./registerNavbar').then(({ registerNavbar }) => registerNavbar(router));
        };
    },
    layouts: {
        LandingPage,
        NotFound,
    },
});

