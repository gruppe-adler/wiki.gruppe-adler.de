import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
    router.addRoute('/', {
        path: '/de/:pathMatch(.*)*',
        redirect: to => to.fullPath.substr('/de'.length),
        name: 'redirect-from-de'
    });
})