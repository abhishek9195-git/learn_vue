
<script lang="ts">
import UserCard from './components/user-card/UserCard.vue'
export type IUser = {id: number, firstName: string, lastName: string, email: string}

export default {
  name: 'App',
  components: {
    UserCard
  },
  data() {
    return {
      users: [
        {id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe4343@gmail.com'},
        {id: 2, firstName: 'James', lastName: 'Smith', email: 'james.smith3434@hotmail.com'},
        {id: 3, firstName: 'Elenor', lastName: 'Shellstrop', email: 'elenor.343shell@gmail.com'}
      ] as IUser[]
    }
  },
  methods: {
    getUser(user: IUser) {
      console.log('==> Parent function called for user: ', user.firstName)
    }
  }
}
</script>

<template>
  App works !!!
  <div class="user-list" v-for="user in users" :key="user.id">
  <UserCard :user="user" :getUser="getUser"/>
  </div>
</template>

<style scoped>
</style>
