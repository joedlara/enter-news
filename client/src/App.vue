<template>
  <div id="app">
    <v-app>
      <page-header />
        <v-content>
            <router-view />
        </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from "@/components/Header.vue";
export default {
  name: "app",
  components: {
    PageHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #c62828;
}
</style>
