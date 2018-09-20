import Api from "@/services/Api";

export default {
  getNews() {
    return Api().get("news");
  },
  postNews(news) {
    return Api().post("main-news/create", news);
  }
};
