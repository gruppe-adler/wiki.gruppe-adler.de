<template>
    <a target="_blank" rel="noopener noreferrer" :href="href"><slot></slot></a>
</template>

<script lang="ts">
import { computed } from 'vue';
import { DefaultThemeData } from '@vuepress/theme-default';
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client';

export default {
    props: {
        link: {
            type: String,
            required: true
        }
    },
    setup({ link }) {
        const themeLocale = useThemeLocaleData<DefaultThemeData>();

        const href = computed(() => {
            const { repo, docsRepo = repo, docsBranch = 'main', docsDir = '' } = themeLocale.value;

            const subLink = link
                .replace(/^\//, '')
                .replace(/:branch/gi, docsBranch)
                .replace(/:dir/gi, docsDir);

            return `https://github.com/${docsRepo}/${subLink}`;
        });

        return {
            href
        };
    }
};
</script>
