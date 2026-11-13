<script lang="ts">
export default {
  name: 'App',
  data() {
    return {
      users: [
        {id: 101, firstName: 'John', lastName: 'Doe', email: 'john.doe@outlook.com'},
        {id: 102, firstName: 'James', lastName: 'Smith', email: 'James.smith@hotmail.com'},
      ]
    }
  }
}
</script>

<template>
  <h1>List of users</h1>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.firstName }}</li>
  </ul>
</template>

<style scoped>
</style>
