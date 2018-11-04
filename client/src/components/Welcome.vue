<template>
  <div>
    <span class="fen">Falcon Entertainment</span>
    <div class="head" v-for="news in mainNews" :key="news.id">
      <img class="newsImage" :src="news.newsImageUrl">
      <div class="news-head">
      	<h1 class="news-title">{{news.title}}</h1>
      	<h3>{{news.story}}</h3>
      </div>
    </div>
    <div class="gry-box">
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
.fen{
  font-size: 4em;
  font-weight: bold;
  color: #c62828;
}

.head {
  position: relative;
  text-align: center;
  margin-bottom: 2em;  
}

.name {
  text-transform: capitalize;
  color: #c62828;
}

.news-title {
  color: #c62828;
  font-family: sans-serif;
}
.news-head {
  color: black;
  position: absolute;
  bottom: 7px;
  text-align: left;
  padding: 0.5em;
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
  background: repeating-linear-gradient(
  -55deg,
  rgba(0, 0, 0, 0.2),
  rgba(0, 0, 0, 0.2) 10px,
  rgba(0, 0, 0, 0.3) 10px,
  rgba(0, 0, 0, 0.3) 20px
);
  margin-top: 1em;
  margin-bottom: 1em;
}
.author {
  color: #d32f2f;
  font-weight: bold;
  text-transform: capitalize;
}
</style>
