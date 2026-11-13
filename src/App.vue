<script lang="ts">
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="top">
    <h1>{{ counter }}</h1>

    </div>
    <div class="bottom">
    <button v-on:click="increment()">+</button>
    <button v-on:click="decrement()">-</button>
    </div>
  </div>

</template>

<style scoped>
.wrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;

  .top {
    display: flex;
    justify-content: center;
  }
  .bottom {
    display: flex;
    justify-content: center;
  }
}
button {
  width: 100px;
  height: 32px;
  background-color: black;
  color: white;
  border: none;
  margin: 0px 15px;
  cursor: pointer;
}
</style>
