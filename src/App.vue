<script lang="ts">

export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  methods: {
    getDisplayName() {
      return this.lastName.concat(', ', this.firstName);
    }
  }
}
</script>

<template>
  Welcome, {{ getDisplayName() }}
</template>

<style scoped>
</style>
