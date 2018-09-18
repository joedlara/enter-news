import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  iconfont: "mdi" || "md" || "mdi" || "fa" || "fa4"
});

/* eslint-disable no-new */

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// new Vue({
//   router,
//   el: "#app",
//   template: "<App/>",
//   components: { App }
// });
