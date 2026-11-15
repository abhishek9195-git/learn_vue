<script>
</script>
<template>
<header>
    <div class="logo">Logo</div>
    <router-link to="/home">Home</router-link>
    <router-link to="/user">User</router-link>
    <router-link to="/product">Product</router-link>
    <router-link to="/order">Order</router-link>
</header>
</template>
<style scoped>
header {
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    background-color: black;
    color: white;
    gap: 15px;

    a {
        font-size: 16px;
        text-decoration: none;
        color: white;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>