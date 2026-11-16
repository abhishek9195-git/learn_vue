<script lang="ts">
import type { IUser } from './model';

export default {
  name: 'App',
  data(): { users: IUser[] } {
    return {
      users: []
    };
  },
  async mounted() {
    const URL = 'https://dummyjson.com/users';
    const response = await (await fetch(URL, {method: 'GET'})).json() as {users: IUser[]}
    this.users = response.users;
  }
};
</script>

<template>
  <h1>User List</h1>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.firstName }}</li>
  </ul>
</template>

<style scoped>
</style>
