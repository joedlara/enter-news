<template>
  <div>
  <br> 
    <div class="head" v-for="news in mainNews" :key="news.id">
      <img class="newsImage" :src="news.newsImageUrl">
      <div class="news-title">
      	<h1>{{news.title}}</h1>
      	<h3>{{news.story}}</h3>
      </div>
    </div>
    <div class="gry-box">
      <p>dafadsf</p>
      <h2>dgfadf</h2>
      <p>lorem ipsum </p>
      
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
.head {
  outline: 3px dotted red;
}

.name {
  text-transform: capitalize;
  color: #c62828;
}

.news-title {
  color: #fafafa;
  font-family: sans-serif;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -107%);
  background-color: rgba(189, 189, 189, 0.9);
  width: 100%;
}

.newsImage {
  width: 100%;
  height: 30em;
  margin: 0 auto;
}

.gry-box {
  height: 20em;
  background-color: #d8d8d8;
  outline: 3px dotted black;
  margin-top: 1em;
  margin-bottom: 1em;
}
.author {
  color: #d32f2f;
  font-weight: bold;
  text-transform: capitalize;
}
</style>
