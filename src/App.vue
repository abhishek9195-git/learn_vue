<script lang="ts">
import Order from './Order.vue';
import Product from './Product.vue';
import User from './User.vue';


export default {
  data: () => ({
    componentName: 'Product'
  }),
  components: {User, Product, Order}
}
</script>

<template>
  <div class="wrapper">
    <button v-on:click="componentName = 'User'">See users</button>
    <button v-on:click="componentName = 'Product'">See products</button>
    <button v-on:click="componentName = 'Order'">See Orders</button>
  </div>
  <component :is="componentName"></component>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;
}
button {
  width: 100px;
  height: 32px;
  background-color: transparent;
  color: white;
  border: .2px solid white;
  border-radius: 15px;
}
</style>
