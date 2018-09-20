<template>
  <div>
    <h1>Falcon Entertainment</h1> 
    <div v-if="$store.state.isUserLoggedIn">
    	<h3> Welcome <span class="name">{{$store.state.user.username}}</span>!</h3>
    </div>
    <div v-for="news in mainNews" :key="news.id">
    	{{news.title}}
    	{{news.author}}
    	{{news.story}}
    </div>
  </div>
</template>

<script>
import NewsService from "@/services/NewsService";
export default {
  name: "Welcome",
  async mounted() {
    this.mainNews = (await NewsService.getNews()).data;
  },
  data() {
    return {
      mainNews: null
    };
  },
  props: {
    user: String
  }
};
</script>

<style scoped>
.name {
  text-transform: capitalize;
  color: #c62828;
}
</style>
