<template>
  <v-layout row wrap align-center>
    <v-flex xs6 offset-xs3 class="text-xs-center">
      <panel title="Login">
        <v-form lazy-validation autocomplete="on">
          <v-text-field 
          type="email" 
          label="Email" 
          v-model="email" />

          <v-text-field 
          type="password"
          label="Password" 
          v-model="password"/>
          <div class="err" v-html="error" />
          <br>
          <v-btn dark class="green darken-4" @click="login">Login</v-btn>
        </v-form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import Panel from "@/components/Panel";
export default {
  name: "login",
  components: {
    Panel
  },
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({ name: "welcome" });
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
