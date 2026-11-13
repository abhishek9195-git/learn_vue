<script>
export default {
    name: 'UserCard',
    props: {
        user: Object,
        getUser: Function
    }
}
</script>

<template>
    <h4>{{ user.firstName }}</h4>

    <button v-on:click="getUser(user)">Select</button>
</template>