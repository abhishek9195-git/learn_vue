<script lang="ts">
import UserCard from './UserCard.vue';

export default {
  name: 'App',
  data: () => ({
    user: {
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male',
      email: 'john.doe2010@gmail.com',
      isActive: true
    }
  }),
  components: {
    UserCard
  }
}
</script>

<template>
  <UserCard>
    <template v-slot:header>
      <h1>Hi, {{ user.firstName }}</h1>
    </template>
    <template v-slot:content>
      <h4>{{ user.email }}</h4>
    </template>
    <template v-slot:footer>
      <p>Your profile status is {{ user.isActive ? 'active': 'inactive' }}</p>
    </template>
  </UserCard>
</template>

<style scoped>
</style>
