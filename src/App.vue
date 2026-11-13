<script lang="ts">
  export default {
    data() {
      return {
        field: '<h1>John Doe</h1>'
      }
    }
  }
</script>

<template>
  <div v-html="field"></div>
</template>

<style scoped>
</style>
