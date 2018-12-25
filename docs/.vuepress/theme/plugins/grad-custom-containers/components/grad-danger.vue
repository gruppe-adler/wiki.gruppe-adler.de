<template>
    <grad-custom-container :title="title || 'GEFAHR'" type="danger">
        <slot />
    </grad-custom-container>
</template>

<script>
import customContainerVue from './custom-container.vue';
export default {
    name: 'grad-danger',
    props: ['title'],
    components: {
        'grad-custom-container': customContainerVue
    }
}
</script>

<style lang="scss" scoped></style>
