<template>
  <v-layout row wrap align-center>
    <v-flex xs6 offset-xs3 class="text-xs-center">
      <panel title="Register">
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
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import Panel from "@/components/Panel";
export default {
  name: "register",
  components: {
    Panel
  },
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
