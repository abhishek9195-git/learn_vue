<script lang="ts">
export default {
  name: 'App',
  data: () => {
    return {
      firstName: 'John',
      lastName: 'Doe',
      greet() {
        return 'Hi, ' + this.firstName
      },
      myClass: 'myClass' 
    }
  },
  methods: {
    getDisplayName() {
      return this.lastName + ', ' + this.firstName
    }
  },
  
}
</script>

<template>
  Welcome, 
  <h1 v-bind:class="myClass">{{ getDisplayName() }}</h1>
</template>

<style scoped>
.myClass {
  color: aqua;
}
</style>
