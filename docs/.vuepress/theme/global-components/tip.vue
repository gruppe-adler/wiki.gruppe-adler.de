<template>
  <grad-custom-container :heading="title || 'TIPP'" type="tip">
        <slot />
  </grad-custom-container>
</template>

<script>
import customContainerVue from '../components/custom-container.vue';
export default {
    props: ['title'],
    components: {
        'grad-custom-container': customContainerVue
    }
}
</script>

<style lang="scss" scoped></style>
