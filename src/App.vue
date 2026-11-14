<script lang="ts">
interface IForm {
  email: string,
  password: string,
  domain: string 
}

type FormKey = 'email' | 'password' | 'domain'

export default {
  name: 'App',
  data: () => ({
    form: {
      email: '',
      password: '',
      domain: ''
    },
    errors: [] as Array<keyof IForm>
  }),
  methods: {
    onSubmit: function() {
      console.log('Login payload...', this.form)
      this.errors = [];
      for (const item of Object.keys(this.form) as Array<keyof typeof this.form>) {
        if (this.form[item] === '') {
          console.log(`Missing ${item}`)
          this.errors.push(item)
        }
      }
    }
  }
}
</script>

<template>

  <div class="wrapper">
    <div class="errors">
      <ul>
        <li v-for="error in errors">Invalid {{ error }}</li>
      </ul>
    </div>
    <h1>Login</h1>
    <div class="form-group">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="text" v-model="form.email">
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" v-model="form.password">
      </div>
      <div class="form-control">
        <label for="domain">Choose domain</label>
        <select name="domain" id="domain" v-model="form.domain">
          <option value=".co.in">xyz.co.in</option>
          <option value=".co.us">abc.co.us</option>
        </select>
      </div>
      <div class="form-control">
        <button type="button" v-on:click="onSubmit()">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
div.wrapper {
  width: 50%;
  border: .5px solid;
  margin: 45px auto;
  padding: 30px;

  .errors li {
    color: red;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .form-control {
      display: flex;
      flex-direction: column;
      gap: 10px;

      input,select {
        width: 100%;
        height: 32px;
        background-color: transparent;
        border: .5px solid #f3f3f3;
        border-radius: 15px;
        color: #f3f3f3;
        padding: 0px 15px;
      }
      button {
        width: 100%;
        height: 32px;
        background-color: black;
        border-radius: 15px;
        border: none;
        cursor: pointer;
        color: #f3f3f3;
        &:hover {
        border: .5px solid #f3f3f3;
        }
      }
    }
  }
}
</style>
