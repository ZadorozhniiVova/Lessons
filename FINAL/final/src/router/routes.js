import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import finalCatalog from "../components/finalCatalog";
import finalFavorite from "../components/finalFavorite";
import finalCatalogBestYear from "../components/finalCatalogBestYear";
import finalCatalogBest2021 from "../components/finalCatalogBest2021";
import finalCatalogBestAllTime from "../components/finalCatalogBestAllTime";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
