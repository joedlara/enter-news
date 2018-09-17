<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to Falcon Entertainment</h1>  
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #c62828;
}
</style>
