<script lang="ts">
export default {
  data: () => ({
    counter: 0
  }),
  watch: { // Gets executed on change of the data property
    counter(currentVal, previousVal) {
      // console.log(currentVal, previousVal);
      if(currentVal > previousVal) {
        console.log('===> UP')
      }
      if(currentVal < previousVal) {
        console.log('===> DOWN')
      }
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="upper">{{ counter }}</div>
    <div class="lower">
      <button v-on:click="counter = counter + 1">Increment</button>
      <button v-on:click="counter = counter - 1">Decrement</button>
    </div>
  </div>
</template>

<style scoped>
</style>
