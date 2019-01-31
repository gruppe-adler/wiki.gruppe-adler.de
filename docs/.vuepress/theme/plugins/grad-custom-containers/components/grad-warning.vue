<template>
    <grad-custom-container :title="title || 'WARNUNG'" type="warning">
        <slot />
    </grad-custom-container>
</template>

<script>
import customContainerVue from './custom-container.vue';
export default {
    name: 'grad-warning',
    props: ['title'],
    components: {
        'grad-custom-container': customContainerVue
    }
}
</script>

<style lang="scss" scoped></style>
