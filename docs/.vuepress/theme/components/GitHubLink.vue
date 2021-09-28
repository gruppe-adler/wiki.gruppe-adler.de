<template>
    <a target="_blank" rel="noopener noreferrer" :href="href"><slot></slot><OutboundLink /></a>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables';

export default {
    props: {
        link: {
            type: String,
            required: true
        }
    },
    setup({ link }) {
        const themeLocale = useThemeLocaleData()

        const href = computed(() => {
            const {
                repo,
                docsRepo = repo,
                docsBranch = 'main',
                docsDir = '',
            } = themeLocale.value;

            const subLink = link.replace(/^\//, '').replaceAll(':branch', docsBranch).replaceAll(':dir', docsDir);
            
            return `https://github.com/${docsRepo}/${subLink}`;
        });

        return {
            href
        }
    }
}
</script>
