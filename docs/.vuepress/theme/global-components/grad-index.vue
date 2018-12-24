<template>
    <div>
        <div v-for="page in localeSites" :key="page.key" v-if="page.regularPath != '/'">
            <h3><a :href="page.regularPath">{{page.title}}</a></h3>
            <p v-for="header in filterHeaders(page.headers)" :key="header.key">
                <span v-for="i in (header.level -1)" class="spacer" />
                <a :href="page.regularPath+'#'+header.slug">{{header.title}}</a>
            </p>
        </div>
    </div>
</template>

<script>

const setNestedKey = (obj, path, value) => {
    if (path.length === 1) {
        obj[path] = value
        return
    }

    if (obj[path[0]] == null) {
        obj[path[0]] = {};
    }

    return setNestedKey(obj[path[0]], path.slice(1), value)
}

export default {
    name: 'grad-index',
    data: () => ({
        includeLevel: 2,
    }),
    methods: {
        filterHeaders(headers) {
            if (headers == null) return [];
            return headers.filter(header => header.level <= this.includeLevel);
        }
    },
    computed: {
        localeSites() {
            return this.$site.pages.filter(site => site.regularPath.match(new RegExp(`^${this.$localePath}`, 'i')));
        }
    }
}
</script>
<style lang="scss" scoped>
.spacer {
    margin-left: 30px;
}

</style>
