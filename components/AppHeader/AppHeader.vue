<template lang="">
  <header class="sticky top-0">
    <div class="app-header">
      <div>
        <h1>Header Navigation</h1>
      </div>
      <nav>
        <AppNavLinks />
      </nav>
    </div>
  </header>
</template>
<script>
import AppNavLinks from './AppNavLinks.vue'
export default {
  name: 'AppHeader',
  components: {
    AppNavLinks,
  },
}
</script>
<style lang=""></style>
