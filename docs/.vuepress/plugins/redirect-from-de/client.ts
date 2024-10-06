import { defineClientConfig } from '@vuepress/client';

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        router.addRoute('/', {
            path: '/de/:pathMatch(.*)*',
            redirect: to => to.fullPath.substring('/de'.length),
            name: 'redirect-from-de'
        });
    }
});
