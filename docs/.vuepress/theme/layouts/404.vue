<template>
    <Layout>
        <template #page>
            <main class="page-404">
                <img :src="$withBase('/images/logo_404.svg')" />
                <h1>404</h1>
                <blockquote>{{ getMsg() }}</blockquote>
                <router-link to="/">Zurück zur Startseite.</router-link>
            </main>
        </template>
    </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';

const msgs = [
    'Du hast dich verlaufen.',
    'Wie bist du denn hier her gekommen?',
    'Dies ist nicht die Seite die du sehen wolltest.',
    'Du bist auf dem falschen Pfad unterwegs.',
    'XiviD ist Schuld.'
];

export default {
    components: {
        Layout
    },
    methods: {
        getMsg() {
            return msgs[Math.floor(Math.random() * msgs.length)];
        }
    }
};
</script>
<style lang="scss" scoped>
.page-404 {
    height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    row-gap: 1rem;
    column-gap: 2rem;
    grid-template:
        'logo heading' 0.5fr
        'logo quote' auto
        'logo link' 0.5fr / auto auto;

    img {
        grid-area: logo;
        height: 15rem;
    }

    h1 {
        grid-area: heading;
        align-self: flex-end;
        margin: 0;
    }

    blockquote {
        grid-area: quote;
        margin: 0;
    }

    a {
        align-self: flex-start;
        grid-area: link;
    }

    @media (max-width: 700px) {
        justify-items: center;
        grid-template:
            'logo' auto
            'heading' auto
            'quote' auto
            'link' auto / auto;
    }
}
</style>
