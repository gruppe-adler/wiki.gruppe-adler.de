<template>
    <grad-custom-container :title="title || 'TIPP'" type="tip">
        <slot />
    </grad-custom-container>
</template>

<script>
import customContainerVue from '../components/custom-container.vue';
export default {
    name: 'grad-tip',
    props: ['title'],
    components: {
        'grad-custom-container': customContainerVue
    }
}
</script>

<style lang="scss" scoped></style>
