<script>
export default {
    'name': 'test-container',
    render(createElement) {
        return createElement(
            'div',
            {class: ['test-container']},
            [
                this.$slots.default
            ]
        );
    },
}
</script>

<style lang="scss" scoped>
.test-container {
    color: black;
    background-color: rgba(red, 0.3);
    padding: 1rem 0.5rem;
    margin-top: 0.5rem;
}

</style>
