import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import date from "date-and-time";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { sync } from "vuex-router-sync";

Vue.config.productionTip = false;
Vue.use(date);
Vue.use(Vuetify, {
  iconfont: "md"
});

sync(store, router);

/* eslint-disable no-new */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
