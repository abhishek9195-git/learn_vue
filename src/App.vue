<script lang="ts">
import UserList from './UserList.vue';
import type { IUser } from './UserList.vue';

export default {
  data: () => ({
    users: [
      {id: 1, firstName: 'John', lastName: 'Doe', gender: 'Male', isActive: true},
      {id: 2, firstName: 'James', lastName: 'Smith', gender: 'Male', isActive: true},
      {id: 3, firstName: 'Elenor', lastName: 'Shellstrop', gender: 'Female', isActive: true},
      {id: 4, firstName: 'David', lastName: 'Johnson', gender: 'Male', isActive: true},
      {id: 5, firstName: 'Peter', lastName: 'Parker', gender: 'Male', isActive: false},
    ] as IUser[]
  }),
  components: {UserList},
  mounted() {
    // this.userList();
  },
  methods: {
    // async userList() {
    //   const response = await fetch('https://dummyjson.com/users');
    //   const data = await response.json();
    //   this.users = data.users as IUser[];
    // }
  }
}
</script>

<template>
  <UserList :users="users"/>
  
</template>

<style scoped>
</style>
 