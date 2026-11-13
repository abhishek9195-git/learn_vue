<script lang="ts">
export default {
  data() {
    return {
      email: ''
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <input type="text" v-model="email"><br>
    <p>{{ email || 'Please enter your email.'}}</p>

    <button>Submit</button>
  </div>
</template>

<style scoped>
</style>
