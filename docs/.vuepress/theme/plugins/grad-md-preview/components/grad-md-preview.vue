<template>
<div class="grad-md-preview">
    <div class="grad-md-preview__menu">
        <div @click="toggle" :class="{ active: !previewShown }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
            <span>Code</span>
        </div>
        <div @click="toggle" :class="{ active: previewShown }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span>Vorschau</span>
        </div>
    </div>
    <div class="grad-md-preview__content" ref="content">
        <slot />
    </div>
</div>
</template>

<script>
export default {
    name: "grad-md-preview",
    data: () => ({
        previewShown: true
    }),
    mounted() {
        this.toggle();
    },
    methods: {
        toggle() {
            this.previewShown = ! this.previewShown;

            this.$refs.content.querySelector('.grad-md-preview__preview').style.display = this.previewShown ? 'inherit' : 'none';
            this.$refs.content.querySelector('.grad-md-preview__code').style.display = !this.previewShown ? 'inherit' : 'none';
        }
    }
};
</script>

<style lang="scss">
.grad-md-preview {
    margin: 30px 0px;
    box-shadow: 0 0 10px rgba(57, 70, 78, 0.2);
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    overflow: hidden;

    &__menu {
        display: flex;
        flex-shrink: 0;

        div {
            padding: 15px;
            cursor: pointer;
            color: #555;
            display: flex;

            > span {
                font-size: 16px;
                line-height: 16px;
                height: 16px;
            }
            > svg {
                margin-right: 5px;
                fill: currentColor;
            }

            &:hover {
                color: black;
            }

            &.active {
                border-bottom: 3px solid #d18d1f;
                color: black;
            }
        }
    }

    &__content {
        overflow-y: auto;
        flex-grow: 1;
    }

    &__code * {
        margin: 0px !important;
        padding: 0px !important;
        border-radius: 0px !important;
    }

    &__code,
    &__preview {
        display: none;
        overflow-y: auto;
    }

    &__preview {
        padding: 15px 2rem;
    }
    &__code > * > pre {
        padding: 15px !important;
    }
}
</style>
