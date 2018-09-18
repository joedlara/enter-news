<template>
  <v-layout column>
    <v-flex class="container">
        <div class="white elevation-2">
          <v-toolbar flat dense class="green" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pt-4 pr-2 pb-4 pl-2">
            <v-form lazy-validation autocomplete="on">
              <v-text-field type="email" label="Email" v-model="email" />
              <v-text-field 
              type="password"
              label="Password" 
              v-model="password"
              :type="show1 ? 'text' : 'password'" />
              <div class="err" v-html="error" />
              <br>
              <v-btn dark class="green" @click="login">Login</v-btn>
            </v-form>
          </div>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      show1: false
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.err {
  color: red;
}
</style>
