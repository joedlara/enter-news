<template>
	<div class="navbar">
		<v-toolbar fixed>
			<v-toolbar-title class="pt-2 mr-2 ">
				<img src="../assets/falcon-logo.png" @click="navigateTo({name: 'welcome'})">
				<span class="logo" @click="navigateTo({name: 'welcome'})">
				FEN
				</span>
			</v-toolbar-title>
			<v-toolbar-items>
				<v-btn flat disabled class="danger">
					<h5>{{this.dateToday}}</h5>
				</v-btn>
				<v-btn flat @click="navigateTo({name: 'about'})">News</v-btn>
				<v-btn flat @click="navigateTo({name: 'about'})">Videos</v-btn>
				<v-btn flat @click="navigateTo({name: 'about'})">Movies</v-btn>
				<v-btn flat @click="navigateTo({name: 'about'})">Comics</v-btn>
				<v-btn flat @click="navigateTo({name: 'about'})">Anime</v-btn>
				<v-btn flat @click="navigateTo({name: 'about'})">About</v-btn>
			</v-toolbar-items>
			<v-spacer />
			
			<sign-in />
			<v-toolbar-items>
				<!-- <v-btn 
				v-if="!$store.state.isUserLoggedIn" 
				dark 
				flat 
				@click="navigateTo({name: 'register'})" 
				class="red darken-3">
				Sign up
				</v-btn> -->
				<v-btn 
				v-if="$store.state.isUserLoggedIn"
				disabled
				flat>
				<v-icon class="mr-2">person</v-icon>
				<span>{{$store.state.user.username}}</span>
				</v-btn>
			<!-- 	<v-btn 
				v-if="$store.state.isUserLoggedIn"
				class="red darken-3"
				@click="logout" 
				flat>
				Logout
				</v-btn> -->

			</v-toolbar-items>
		</v-toolbar>
	</div>
</template>

<script>
import SignIn from "@/components/SignIn";
import date from "date-and-time";
export default {
components:{
	SignIn,
},
  mounted() {
    const now = new Date();
    this.dateToday = date.format(now, "ddd, MMM DD");
  },
  data() {
    return {
      dateToday: Number,
      loginItems: [{ text: "Logout", link: "/about" }],
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({ name: "welcome" });
    }
  }
};
</script>

<style scoped>
.navbar{
margin-bottom: 6em;
}

.logo {
  cursor: pointer;
  font-weight: bold;
  color: #c62828;
  font-size: 14px;
}
img {
  cursor: pointer;
}
</style>
