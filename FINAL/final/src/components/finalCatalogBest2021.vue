<template>
  <div class="finalCatalogBest2021 catalog">
    <finalHeader />
    <h1 class="catalog__title">Popular in 2021</h1>
    <div class="catalog__container">
      <finalCatalogItem
        v-for="(bestOf2021, bestOf2021Index) in BESTOF2021.results"
        :key="bestOf2021.id"
        :product_data="bestOf2021"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite(bestOf2021Index)"
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

export default {
  name: "finalCatalogBest2021",
  components: {
    finalCatalogItem,
    finalHeader,
    finalFooter,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["BESTOF2021"]),
  },
  methods: {
    ...mapActions([
      "GET_BEST_2021_FROM_API",
      "ADD_TO_FAVORITE",
      "DELETE_FROM_FAVORITE",
    ]),
    deleteFromFavorite(bestOf2021Index) {
      this.DELETE_FROM_FAVORITE(bestOf2021Index);
    },
    addToFavorite(data) {
      this.ADD_TO_FAVORITE(data);
    },
  },
  mounted() {
    this.GET_BEST_2021_FROM_API().then((responce) => {
      console.log(responce);
    });
  },
};
</script>
