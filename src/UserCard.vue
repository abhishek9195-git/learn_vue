<script lang="ts">
import type { IUser } from './UserList.vue';

export default {
    name: 'UserCard',
    props: {
        user: Object
    }
}
</script>
<template>
    <div class="card">{{ (user as IUser)?.firstName }}</div>
</template>
<style>
div.card {
    border: 1px solid #f3f3f3;
    margin: 15px 0px;
    padding: 15px;
    border-radius: 14px;
}
</style>