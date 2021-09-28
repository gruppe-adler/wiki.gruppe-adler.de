<template>
    <Layout>
        <template #page>
            <main class="page grad-landing-page">
                <h1>
                    <img :src="$withBase('/images/adlerkopp.png')" />
                    <span>Gruppe Adler Wiki</span>
                </h1>
                <SearchBox style="grid-column: 1 / 3;"/>
                <router-link to="wiki-index">Index</router-link>
                <router-link to="/infrastruktur/wiki-how-to">Wiki How-To</router-link>
            </main>
        </template>
    </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default { components: { Layout } }
</script>
<style lang="scss">
.grad-landing-page {
    height: 100vh;
    box-sizing: border-box;
    display: grid;
    justify-content: center;
    align-content: center;
    justify-items: center;
    column-gap: 3rem;
    row-gap: 1rem;

    grid-template: 
        "heading heading" auto
        "search search" auto
        "index how-to" auto / .5fr .5fr;

    > h1 {
        display: flex;
        align-items: center;
        column-gap: .25em;
        margin: 0;
        grid-area: heading;
        

        img {
            height: 1.5em;
        }

    }

    > a {
        color: var(--c-text-lighter);

        &:first-of-type {
            grid-area:  index;
            justify-self: flex-end;
        }
        &:last-child {
            grid-area:  how-to;
            justify-self: flex-start;
        }
    }


    --search-input-width: min(40rem, calc(100vw - 2rem));
    --search-result-width: var(--search-input-width);

    $box-height: 4rem;

    .search-box {
        margin-left: 0;

        input {
            font-size: 1.75rem;
            line-height: $box-height;
            height: $box-height;
            padding-left: $box-height;
            background-size: 2rem;
            background-position: 1.2rem 1rem;

            @media (max-width: 720px) {
                cursor: text;
                width: var(--search-input-width);
                border-color: var(--search-border-color);
            }
        }

        .suggestions {
            right: 0;
            top: 3.5rem;
            box-sizing: border-box;
        }
    }
}
</style>
