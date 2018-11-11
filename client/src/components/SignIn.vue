<template>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" max-width="600px">
        <v-btn slot="activator" color="red darken-3" dark>Sign In</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">FEN Sign In</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs6>
                  <v-text-field label="Email/Username" required></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field label="Password" type="password" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <!-- <small>*indicates required field</small> -->
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark class="red darken-3" @click="register">Sign In</v-btn>
          </v-card-actions>

          <v-card-title>
            <span class="headline">Social Sign In</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
              </v-layout>
            </v-container>
            <!-- <small>*indicates required field</small> -->
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>
<script>
export default {
  data(){
     dialog: false
  }
};
</script>

<style scoped>
</style>