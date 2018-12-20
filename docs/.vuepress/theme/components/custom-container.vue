<template>
  <div :class="['grad-custom-container', type]">
        <p class="grad-custom-container__title">{{heading}}</p>
        <slot />
  </div>
</template>

<script>
export default {
    'name': 'grad-custom-container',
    props: ['heading', 'type']
}
</script>

<style lang="scss" scoped>
$color:#6CAACC !default;

.grad-custom-container {

    color: black;

    
    padding: 0.1rem 1.5rem;
    border-left-width: 0.5rem;
    border-left-style: solid;
    margin: 1rem 0;

    border-left-color: $color;
    background-color: rgba($color, 0.3);

    &__title {
        color: $color;
        font-weight: 600;
        margin-bottom: -0.4rem;
        color: $color;
    }

    
    &.warning {
        $color: #d18d1f;
        background-color: rgba($color, 0.3);
        border-left-color: $color;
        
        .grad-custom-container__title {
            color: $color;
        }
    }

    &.danger {
        $color: #8F1167;
        background-color: rgba($color, 0.3);
        border-left-color: $color;

        .grad-custom-container__title {
            color: $color;
        }
    }

    &.tip {
        $color: #66AA66;
        background-color: rgba($color, 0.3);
        border-left-color: $color;

        .grad-custom-container__title {
            color: $color;
        }
    }
}

</style>
