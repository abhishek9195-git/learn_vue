<script lang="ts">

export default {
  data: () => ({
    searchTerm: ''
  })
}
</script>

<template>
  <div class="wrapper">
    <label for="search">Search</label>
    <input type="text" v-model.trim="searchTerm">
    <h4>{{ searchTerm }}</h4>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    height: 32px;
    width: 50%;
    background-color: transparent;
    color: white;
    margin: 0;
    padding: 0px 15px;
    border: .5px solid white;
    border-radius: 15px;
  }
}
</style>
