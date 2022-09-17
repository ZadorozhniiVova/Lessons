<template>
  <div class="finalCatalogBestYear catalog">
    <finalHeader />
    <h1 class="catalog__title">Best of the year</h1>
    <div class="catalog__container">
      <finalCatalogItem
        v-for="(bestOfYear, bestOfYearIndex) in BESTOFYEAR.results"
        :key="bestOfYear.id"
        :product_data="bestOfYear"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite(bestOfYearIndex)"
      />
    </div>
    <div class="overflow-auto catalog__pagination d-flex justify-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="BESTOFYEAR.count / perPage"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
      ></b-pagination>
    </div>
    <finalFooter />
  </div>
</template>

<script>
import finalCatalogItem from "./finalCatalogItem";
import finalHeader from "../components/finalHeader";
import finalFooter from "../components/finalFooter.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "finalCatalogBestYear",
  components: {
    finalCatalogItem,
    finalHeader,
    finalFooter,
  },
  data() {
    return {
      perPage: 20,
      currentPage: 1,
    };
  },
  watch: {
    currentPage(next) {
      this.$store.dispatch("getBestOfYearByPage", next);
      window.scrollTo(0, 0);
    },
  },
  methods: {
    ...mapActions([
      "GET_BEST_OF_YEAR_FROM_API",
      "ADD_TO_FAVORITE",
      "DELETE_FROM_FAVORITE",
    ]),
    deleteFromFavorite(bestOfYearIndex) {
      this.DELETE_FROM_FAVORITE(bestOfYearIndex);
    },
    addToFavorite(data) {
      this.ADD_TO_FAVORITE(data);
    },
  },
  mounted() {
    this.GET_BEST_OF_YEAR_FROM_API().then((responce) => {
      console.log(responce);
    });
  },

  computed: {
    ...mapGetters(["BESTOFYEAR"]),
  },
};
</script>
