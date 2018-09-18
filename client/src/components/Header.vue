<template>
	<div>
		<v-toolbar>
			<v-toolbar-title mr-2 class="pt-2">
				<img src="../assets/falcon-logo.png" @click="navigateTo({name: 'welcome'})">
				<span class="logo" @click="navigateTo({name: 'welcome'})">
				FEN
				</span>
			</v-toolbar-title>
			<v-toolbar-items>
				<v-btn flat @click="navigateTo({name: 'about'})">News</v-btn>
				<v-btn flat @click="navigateTo({name: 'about'})">Videos</v-btn>
				<v-btn flat @click="navigateTo({name: 'about'})">Reviews</v-btn>
				<v-btn flat @click="navigateTo({name: 'about'})">Comics Books</v-btn>
				<v-btn flat @click="navigateTo({name: 'about'})">Anime</v-btn>
				<v-btn flat @click="navigateTo({name: 'about'})">About</v-btn>
			</v-toolbar-items>

			<v-spacer />
			<v-toolbar-items>
				<v-btn 
					v-if="!$store.state.isUserLoggedIn" 
					dark 
					flat 
					@click="navigateTo({name: 'register'})" 
					class="red darken-3">
					Sign Up
				</v-btn>
				<v-btn 
					v-if="!$store.state.isUserLoggedIn"
					dark 
					flat 
					@click="navigateTo({name: 'login'})" 
					class="green">
					Login
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	</div>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.logo {
  cursor: pointer;
  font-weight: bold;
  color: #c62828;
}
img {
  cursor: pointer;
}
</style>
