import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMask from "v-mask";
import VueCreditCard from "@fracto/vue-credit-card";


import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueCreditCard);
Vue.use(VueMask);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  cardMask: "#### ##### #### ####",

  data() {
    return {};
  },
  render: (h) => h(App),
}).$mount("#app");
