<script>
export default {
    'name': 'grad-custom-container',
    props: ['heading', 'type'],
    render(createElement) {
        return createElement(
            'div',
            {class: ['grad-custom-container', `grad-custom-container--${this.type}`]},
            [
                createElement(
                    'p',
                    {class: ['grad-custom-container__title']},
                    [this.heading || 'CONTAINER']
                ),
                createElement(
                    'div',
                    {
                        domProps: {
                            innerHTML: this.renderedContent
                        },
                    },
                    this.$slots.default
                )
                
            ]
        );
    },
    mounted() {
    },
    computed: {
    }
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


    &.grad-custom-container--warning {
        $color: #d18d1f;
        background-color: rgba($color, 0.3);
        border-left-color: $color;

        .grad-custom-container__title {
            color: $color;
        }
    }

    &.grad-custom-container--danger {
        $color: #8F1167;
        background-color: rgba($color, 0.3);
        border-left-color: $color;

        .grad-custom-container__title {
            color: $color;
        }
    }

    &.grad-custom-container--tip {
        $color: #66AA66;
        background-color: rgba($color, 0.3);
        border-left-color: $color;

        .grad-custom-container__title {
            color: $color;
        }
    }
}

</style>
