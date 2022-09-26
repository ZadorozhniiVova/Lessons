<template>
  <div class="finalFavorite catalog" @mousemove="move">
    <finalHeader />
    <h1 class="catalog__title">
      Favorite Games of
      <span class="user__email">{{ $store.state.user.email }}</span>
    </h1>
    <div class="catalog__container">
      <finalCatalogItem
        v-for="(favorite, favoriteGameIndex) in FAVORITE"
        :key="favorite.id"
        :product_data="favorite"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite(favoriteGameIndex)"
      />
    </div>
    <finalFooter />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import finalCatalogItem from "./finalCatalogItem";
import finalHeader from "../components/finalHeader";
import finalFooter from "../components/finalFooter.vue";
import { eventBus } from "../main";

export default {
  name: "finalFavorite",
  components: {
    finalCatalogItem,
    finalHeader,
    finalFooter,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["FAVORITE"]),
  },
  methods: {
    ...mapActions(["ADD_TO_FAVORITE", "DELETE_FROM_FAVORITE"]),
    deleteFromFavorite(favoriteGameIndex) {
      this.DELETE_FROM_FAVORITE(favoriteGameIndex);
    },
    addToFavorite(data) {
      this.ADD_TO_FAVORITE(data);
    },
    move($event) {
      if ($event.pageX < 50) {
        eventBus.$emit("isOpenSideMenu", true);
      } else {
        eventBus.$emit("isOpenSideMenu", false);
      }
    },
  },
  created() {
    eventBus.$on("user", (data) => {
      this.user = data;
    });
  },
};
</script>
