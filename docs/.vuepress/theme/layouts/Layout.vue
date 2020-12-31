<template>
<div>
  <grad-navbar active-path="/wiki" sublinks-hidden nav-style="z-index: 1000;"></grad-navbar>
  <ParentLayout>
  </ParentLayout>
</div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: {
    ParentLayout
  }
}
</script>

<style src="@parent-theme/styles/index.styl" lang="stylus"></style>
<style src="../styles/theme.styl" lang="stylus"></style>