import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import finalCatalog from "../components/finalCatalog";
import finalFavorite from "../components/finalFavorite";
import finalCatalogBestYear from "../components/finalCatalogBestYear";
import finalCatalogBest2021 from "../components/finalCatalogBest2021";
import finalCatalogBestAllTime from "../components/finalCatalogBestAllTime";
import finalCatalogPC from "../components/finalCatalogPC"
import finalCatalogXbox from "../components/finalCatalogXbox"
import finalCatalogNintendo from  "../components/finalCatalogNintendo"
import finalCatalogIos from "../components/finalCatalogIos"
import finalCatalogAndroid from "../components/finalCatalogAndroid"
import finalCatalogPS from "../components/finalCatalogPS"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    name: "gameId",
    path: "/game/:id",
    component: GameView,
  },

  {
    path: "/catalog",
    name: "catalog",
    component: finalCatalog,
    props: true,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: finalFavorite,
    props: true,
  },
  {
    path: "/Best-of-Year",
    name: "BestYear",
    component: finalCatalogBestYear,
    props: true,
  },
  {
    path: "/Best-of-2021",
    name: "Best2021",
    component: finalCatalogBest2021,
    props: true,
  },
  {
    path: "/Best-of-All-Times",
    name: "bestOfAllTime",
    component: finalCatalogBestAllTime,
  },
  {
    path: "/Platform-PC",
    name: "PlatformPC",
    component: finalCatalogPC,
  },
  {
    path: "/Platform-Playstation",
    name: "PlatformPS",
    component: finalCatalogPS,
  },
  {
    path: "/Platform-XBox",
    name: "PlatformXbox",
    component: finalCatalogXbox,
  },
  {
    path: "/Platform-Nintendo",
    name: "PlatformNintendo",
    component: finalCatalogNintendo,
  },
  {
    path: "/Platform-iOs",
    name: "PlatformIos",
    component: finalCatalogIos,
  },
  {
    path: "/Platform-Android",
    name: "PlatformAndroid",
    component: finalCatalogAndroid,
  },
  

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
