<template>
  <SWUpdatePopup>
    <div
      slot-scope="{ enabled, reload, message, buttonText }"
      class="grad-pwa-update">
      <span>{{ message }}</span>
      <button @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup }
}
</script>

<style scoped lang="scss">
.grad-pwa-update {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #d18d1f;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 20px;
    border-radius: 2px;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.3);

    > * {
        display: block;
        margin: 10px;
    }
    > button {
        border: 1px solid white;
        border-radius: 3px;
        padding: 8px 16px;
        flex: none;
        color: white;
        background-color: transparent;
        font-size: 0.8em;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }

        &:focus {
            outline: none;
        }
    }

}
</style>