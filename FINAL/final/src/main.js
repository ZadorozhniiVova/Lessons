import Vue from "vue";
import App from "./App.vue";
import router from "./router/routes";
import store from "./store/store";
import { Table, Input } from "buefy";
import "buefy/dist/buefy.css";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import vuetify from "@/plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import $ from "jquery";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vuetify/dist/vuetify.min.css";
import loader from "vue-ui-preloader";
import VModal from "vue-js-modal/dist/index.nocss.js";
import "vue-js-modal/dist/styles.css";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import VueSocialSharing from "vue-social-sharing";
import Multiselect from "vue-multiselect";
import routes from "@/router/routes.js";

Vue.component("VueSlickCarousel", VueSlickCarousel);
Vue.use(Buefy);
Vue.use(Table);
Vue.use(Input);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(loader);
Vue.use(VModal);
Vue.use(VueSocialSharing);

new Vue({
  router,
  store,
  Buefy,
  vuetify,
  axios,
  VueAxios,
  $,
  VModal,
  VueSocialSharing,
  Multiselect,
  routes,

  render: (h) => h(App),
  mounted() {},
}).$mount("#app");
