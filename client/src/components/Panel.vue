<template>
  <div class="white elevation-2">
          <v-toolbar flat dense dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
          </v-toolbar>
          <div class="pt-4 pr-2 pb-4 pl-2">
            <slot>
              No slot content defined.
            </slot>
          </div>
        </div>
</template>

<script>
export default {
  name: "panel",
  props: ["title", "color"]
};
</script>

<style scoped>
</style>
