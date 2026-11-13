<script lang="ts">
  export default {
    data() {
      return {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        gender: 'Male',
        isActive: true,
        status: 'online'
      }
    },
    computed: {
      customClass() {
        return {
          active: this.isActive
        }
      }
    }
  }
</script>

<template>
  <h1 v-bind:class="isActive ? 'active' : 'inactive'">{{ firstName + ' ' + lastName }}</h1>
  <h1 v-bind:class="customClass">{{ firstName + ' ' + lastName}}</h1>

  <button v-on:click="isActive = !isActive">{{ isActive ? 'logout' : 'login' }}</button>
</template>

<style scoped>

.active {
  color: green;
}

.inactive {
  color: red;
}
</style>
