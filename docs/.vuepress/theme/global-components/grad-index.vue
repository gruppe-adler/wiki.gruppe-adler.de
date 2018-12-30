<template>
    <div>
        <div v-for="cat in categories" :key="cat.title">
            <h2><a :href="cat.url">{{cat.title}}</a></h2>
            <h4 v-for="site in cat.children" :key="site.url">
                <a :href="site.url">{{site.title}}</a>
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'grad-index',
    data: () => ({
        includeLevel: 2,
        categories: []
    }),
    mounted() {
        let sidebarConfig = this.$themeLocaleConfig.sidebar;

        let categories = [];
        for (var url in sidebarConfig) {
            categories.push({
                'url': url,
                'title': sidebarConfig[url][0].title,
                'children': this.normalizeChildren(sidebarConfig[url][0].children, url)
            });
        }

        this.categories = categories;
    },
    methods: {
        filterHeaders(headers) {
            if (headers == null) return [];
            return headers.filter(header => header.level <= this.includeLevel);
        },
        normalizeChildren(children, parenturl) {
            return children.map(child => {
                let url;
                if (typeof child == "string") {

                    if (child == "") return null;

                    let fullurl = parenturl + child + ".html";
                    let title = this.$site.pages.find(x => x.regularPath == fullurl).title;
                    return {'url': fullurl, 'title': title};
                }

                if (Array.isArray(child)) {
                    if (child[0] == "") return null;

                    return {'url': parenturl + child[0] + ".html", 'title': child[1]};
                }

                return null;

            }).filter(child => child != null);
        }
    },
    computed: {
    }
}
</script>
<style lang="scss" scoped>
h4 {
    margin-left: 30px;
}
</style>
