import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import { sync } from "vuex-router-sync";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  iconfont: "mdi" || "md" || "mdi" || "fa" || "fa4"
});

sync(store, router);

/* eslint-disable no-new */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// new Vue({
//   el: "#app",
//   router,
	// store,
//   template: "<App/>",
//   components: { App }
// });
