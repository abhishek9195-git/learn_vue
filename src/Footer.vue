<script>
export default {
    name: 'Footer'
}
</script>
<template>
    <div class="footer">
    <h2>Footer Component</h2>
    </div>
</template>
<style scoped>
.footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 52px;
    background-color: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer h2 {
    margin: 0;
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}
</style>