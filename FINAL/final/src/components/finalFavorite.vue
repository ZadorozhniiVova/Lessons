<template>
  <div class="finalFavorite catalog">
    <finalHeader />
    <h1 class="catalog__title">Favorite Games</h1>
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
// import finalFavoriteItem from "./finalFavoriteItem.vue";
import finalCatalogItem from "./finalCatalogItem";
import finalHeader from "../components/finalHeader";
import finalFooter from "../components/finalFooter.vue";

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
  },
};
</script>

<style lang="scss" scoped>
* {
  color: white;
  background-color: black;
}
.catalog {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  height: 100%;
  padding-bottom: 100px;

  &__title {
    text-align: center;
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
