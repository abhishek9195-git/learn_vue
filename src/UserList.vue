
<script lang="ts">
import UserCard from './UserCard.vue';

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    gender: 'Male' | 'Female',
    isActive: boolean
}
export default {
    name: 'UserList',
    components: {
        UserCard
    },
    props: {
        users: {
            type: Array<IUser>,
            default: () => []
        }
    }
}
</script>
<template>
    <div class="wrapper">
        <h1>List of users:</h1>
        <div class="card-group">
            <UserCard v-for="user in users" :key="user.id" :user="user"/>
        </div>
    </div>
</template>
<style>
</style>