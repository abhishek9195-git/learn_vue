<script lang="ts">
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isAdmin: false,
      gender: 'male'
    }
  },
  methods: {
    onSubmit() {
      console.log('Form submitted.', this.email, this.password, this.isAdmin, this.gender, this.firstName)
    }
  }
}
</script>

<template>
  <h1>Sign Up Form</h1>
  <div class="form">
    <label for="firstName">First Name</label><br>
    <input type="text" v-model="firstName"><br><br>

    <label for="lastName">Last Name</label><br>
    <input type="text" v-model="lastName"><br><br>

    <label for="email">Email Address</label><br>
    <input type="text" v-model="email">
    <p>{{ email || 'Please enter your email address.' }}</p> <br>

    <label for="isAdmin">Admin</label> &nbsp;
    <input type="checkbox" name="isAdmin" id="isAdmin" v-model="isAdmin"><br>

    <div v-if="isAdmin">
      <label for="adminEmployeeID">Admin ID</label><br>
      <input type="text"> <br><br>
    </div>
    <div v-else="isAdmin">
      <label for="userID">Employee ID</label><br>
      <input type="text" name="userID"> <br><br>
    </div>

    <label for="gender">Gender</label> &nbsp;
    <input type="radio" name="gender" value="male" v-model="gender">Male
    <input type="radio" name="gender" value="female" v-model="gender">Female

    <br><br>

    <label for="password">New Password</label><br>
    <input type="password" v-model="password">
    <p>{{ password || 'Please enter your password.' }}</p> <br>

    <button type="submit" v-on:click="onSubmit()">Create account</button>
  </div>
</template>

<style scoped>
div.form {
  width: 50%;
}
</style>
