<script lang="ts">
import Footer from './Footer.vue';
import Header from './Header.vue';

export default {
  data: () => ({}),
  beforeCreate: () => {console.log('==> Before create')},
  created: () => {console.log('==> Created')},
  beforeMount: () => {console.log('==> Before mount')},
  mounted: () => {console.log('==> Mounted')},
  beforeUpdate: () => console.log('Before update'),
  updated: () => console.log('==> updated.'),
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  <Header />
  <Footer />
</template>

<style scoped>
</style>
