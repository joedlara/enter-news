<template>
  <v-layout column>
    <v-flex class="container">
        <div class="white elevation-2">
          <v-toolbar flat dense class="red darken-3" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div class="pt-4 pr-2 pb-4 pl-2">
            <v-form ref="form" lazy-validation>
              <v-text-field label="Username" v-model="username" />
              <v-text-field label="Email" v-model="email" />
              <v-text-field 
              label="Password" 
              v-model="password"
              type="password" />
              <div class="err" v-html="error" />
              <br>
              <v-btn dark class="red darken-3" @click="register">Register</v-btn>
            </v-form>
          </div>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
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
