<template>
    <h1>
        If you're not redirected click<router-link to="/de/">here</router-link>.
    </h1>
</template>

<script>
export default {
    name: 'grad-redirect-to-de',
    mounted() {
        this.$router.push('/de/');
    }
}
</script>
