<template>
  <div class="grad-landing-page">
      <h1 class="grad-landing-page__heading">Gruppe Adler Wiki</h1>
      <div class="grad-landing-page__input-wrapper">
        <img class="grad-landing-page__icon" src="https://forum.gruppe-adler.de/assets/uploads/system/site-logo.png" />
        <SearchBox/>
      </div>
  </div>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  components: { SearchBox }
}
</script>

<style lang="css" scoped>
.grad-landing-page {
  display: flex;
  align-items: center;
  flex-direction: column;

  align-self: center;
}

.grad-landing-page__input-wrapper {
  display: flex;
}

.grad-landing-page__icon {
  height: 2rem;
  margin-right: 0.5rem;
}


</style>
