<script lang="ts">
export default {
  data: () => ({
    counter: 0
  }),
  beforeUpdate: function() {console.log('==> Before update.', this.$refs['count'].textContent)},
  updated: function() {console.log('==> updated', this.$refs['count'].textContent)}
}
</script>

<template>
  App works !!!
  <h1 ref="count">{{ counter }}</h1>
  <button v-on:click="counter++">Increment</button>
</template>

<style scoped>
</style>
