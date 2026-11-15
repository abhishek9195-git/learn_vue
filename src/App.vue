<script lang="ts">
export default {
  data: () => ({
    form: {
      firstName: '',
      lastName: ''
    }

  }),
  methods: {
    getFullName(): string {
      return `${this.form.firstName} ${this.form.lastName}`
    }
  },
  computed: {
    getDisplayName(): string {
      return `Mr. ${this.form.firstName} ${this.form.lastName}`;
    }
  }
// Computed and methods does the same thing. But computed performs caching which enhances performances.
}
</script>

<template>
  <div class="wrapper">
    <h1>Welcome, {{ getFullName() }}</h1>
    <div class="form-group">
      <div class="form-control">
        <label for="firstName">First Name </label>
        <input type="text" name="firstName" v-model="form.firstName">
      </div>
      <div class="form-control">
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" v-model="form.lastName">
      </div>
      <div class="form-control">
        <button type="submit">login</button>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
</style>
