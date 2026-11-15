<script lang="ts">
import Footer from './Footer.vue';

export default {
  components: {Footer}
}
</script>

<template>
  App works !!!
  <teleport to="#footer">
  <Footer />
  </teleport>
</template>

<style scoped>
</style>
