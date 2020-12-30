<template>
<div class="theme-container">
    <grad-navbar active-path="/wiki" sublinks-hidden></grad-navbar>
    <div class="content">
        <img :src="$withBase('/logo.png')" />
        <div>
            <h1>404</h1>
            <blockquote>{{ getMsg() }}</blockquote>
            <router-link to="/">Zurück zur Startseite.</router-link>
        </div>
    </div>
</div>
</template>

<script>
const msgs = [
    `Du hast dich verlaufen.`,
    `Wie bist du denn hier her gekommen?`,
    `Dies ist nicht die Seite die du sehen wolltest.`,
    `Du bist auf dem falschen Pfad unterwegs.`
]

export default {
    methods: {
        getMsg () {
           return msgs[Math.floor(Math.random() * msgs.length)]
        }
    }
}
</script>

<style src="@parent-theme/styles/index.styl" lang="stylus"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
<style lang="scss" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    padding-top: 72px;
    box-sizing: border-box;

    img {
        max-height: 200px;
    }
}
</style>
