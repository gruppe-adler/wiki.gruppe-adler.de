<template>
    <div>
        <span v-for="page in $site.pages">
            <a :href="page.regularPath">{{page.title}}</a>
            <p v-for="header in page.headers" :key="header.key">
                <span v-for="i in (header.level - 1)" class="spacer" />
                <a :href="page.regularPath+'#'+header.slug">{{header.title}}</a>
            </p>
        </span>
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
