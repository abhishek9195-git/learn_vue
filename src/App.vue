<script lang="ts">
export default {
  name: 'App',
  methods: {
    search() {
      const searchInput = this.$refs.search_input as HTMLInputElement | undefined;
      searchInput?.focus();

      console.log(searchInput?.value)
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <input type="text" placeholder="Try writing something..." ref="search_input">
    <button v-on:click="search">Search</button>
  </div>
</template>

<style scoped>
div.wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  input {
    color: white;
    width: 50%;
    height: 2rem;
    padding: 0px 15px;
    border: .5px solid #f3f3f3;
    border-radius: 15px;
    background-color: transparent;
  }

  button {
    width: 25%;
    height: 2rem;
    background-color: rgba(0, 0, 0, 0.424);
    color: white;
    border: .5px solid #f3f3f3;
    border-radius: 15px;
  }
}

</style>
