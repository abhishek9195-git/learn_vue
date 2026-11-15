<script lang="ts">
export default {
  name: 'App',
  // beforeMount: function () {console.log('==> BeforeMount')},
  // mounted: () => {console.log('==> mounted')},
  beforeUnmount: function() {console.log('==> Before unmount', this.$refs['header'])},
  unmounted: () => {console.log('==> unmounted')} 
}
</script>

<template>
  App works !!!
  <h1 ref="header">App component</h1>
</template>

<style scoped>
</style>
