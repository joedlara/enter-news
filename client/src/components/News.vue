<template>
	<v-layout container>
		<v-flex xs4>
			<panel title="News Metadata">
		          <v-text-field label="Title" v-model="news.title" required :rules=[required] />
		          <v-text-field label="Author" v-model="news.author" required :rules=[required] />
		          <v-text-field label="Category" v-model="news.category" required :rules=[required] />
		          <v-text-field label="Image Url" v-model="news.newsImageUrl" required :rules=[required] />
		          <v-text-field label="Youtube Id" v-model="news.youtubeId" />
		          <v-text-field label="Tags" v-model="news.tags" />
			</panel>
		</v-flex>
		<v-flex xs8>
			<panel title="Review/News" class="ml-2">
				<v-textarea label="Story" v-model="news.story" required :rules=[required] />
				</panel>
				<br>
				<v-btn dark class="blue darken-4" @click="createNewsPost">Create</v-btn>
		</v-flex>
	</v-layout>
</template>

<script>
import Panel from "@/components/Panel";
import NewsService from "@/services/NewsService";
export default {
  name: "about",
  components: {
    Panel
  },
  data() {
    return {
      news: {
        title: "",
        author: "",
        category: "",
        newsImageUrl: "",
        youtubeId: "",
        tags: "",
        story: ""
      },
      required: value => !!value || "Required"
    };
  },
  methods: {
    async createNewsPost() {
      try {
        await NewsService.postNews(this.news);
        this.$router.push({ name: "welcome" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
</style>
