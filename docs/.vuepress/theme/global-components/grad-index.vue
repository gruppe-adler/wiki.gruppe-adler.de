<template>
    <div>
        <div v-for="page in $site.pages" :key="page.key" v-if="page.regularPath != '/'">
            <h3><a :href="page.regularPath">{{page.title}}</a></h3>
            <p v-for="header in page.headers" :key="header.key">
                <span v-for="i in (header.level -1)" class="spacer" />
                <a :href="page.regularPath+'#'+header.slug">{{header.title}}</a>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'grad-index',
}
</script>
<style lang="scss" scoped>
.spacer {
    margin-left: 30px;
}

</style>
