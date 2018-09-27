<template>
  <div>
    <h1>Falcon Entertainment</h1> 
    <div v-if="$store.state.isUserLoggedIn">
    </div>
    <div v-for="news in mainNews" :key="news.id">
      <img class="newsImage" :src="news.newsImageUrl">
    	<h1>{{news.title}}</h1>
    	Author: {{news.author}}<br>
      <!-- {{news.createdAt}} -->
    	<h3>{{news.story}}</h3><br>
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
      mainNews: null,
      dateToday: Number
    };
  }
};
</script>

<style scoped>
.name {
  text-transform: capitalize;
  color: #c62828;
}

.newsImage {
  width: 50%;
  margin: 0 auto;
}
</style>
