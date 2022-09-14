<template>
  <div class="finalCatalogAllTime catalog">
    <finalHeader />
    <h1 class="catalog__title">Popular All Time</h1>
    <div class="catalog__container">
      <finalCatalogItem
        v-for="(name, index) in BESTOFALLTIME.results"
        :key="name.id"
        :product_data="name"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite(index)"
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
  name: "finalCatalogAllTime",
  components: {
    finalCatalogItem,
    finalHeader,
    finalFooter,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["BESTOFALLTIME"]),
  },
  methods: {
    ...mapActions([
      "GET_POPULAR_ALL_TIME",
      "ADD_TO_FAVORITE",
      "DELETE_FROM_FAVORITE",
    ]),
    deleteFromFavorite(index) {
      this.DELETE_FROM_FAVORITE(index);
    },
    addToFavorite(data) {
      this.ADD_TO_FAVORITE(data);
    },
  },
  mounted() {
    this.GET_POPULAR_ALL_TIME().then((responce) => {
      console.log(responce);
    });
  },
};
</script>
