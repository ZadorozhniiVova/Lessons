<template>
  <div class="finalCatalogBest2021 catalog" @mousemove="move">
    <finalHeader />
    <div class="catalog__title d-flex justify-center align-start flex-column">
      <h1 class="catalog__title-text">Popular in 2021</h1>
      <div class="d-flex">
        <div>
          <b-form-select
            v-model="selectedFilter"
            :options="filterBy"
            :plain="true"
          ></b-form-select>
        </div>
        <div>
          <b-form-select
            v-model="selectedPlatform"
            :options="platforms"
            :plain="true"
          ></b-form-select>
        </div>
      </div>
    </div>
    <div class="catalog__container">
      <finalCatalogItem
        v-for="(bestOf2021, bestOf2021Index) in BESTOF2021.results"
        :key="bestOf2021.id"
        :product_data="bestOf2021"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite(bestOf2021Index)"
      />
    </div>
    <div class="overflow-auto catalog__pagination d-flex justify-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="BESTOF2021.count / perPage"
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
import { mapActions, mapGetters } from "vuex";
import finalCatalogItem from "./finalCatalogItem";
import finalHeader from "../components/finalHeader";
import finalFooter from "../components/finalFooter.vue";
import Vue from "vue";
import { eventBus } from "../main";

export default {
  name: "finalCatalogBest2021",
  components: {
    finalCatalogItem,
    finalHeader,
    finalFooter,
  },
  data() {
    return {
      perPage: 20,
      currentPage: 1,
      selectedFilter: "",
      selectedPlatform: "",

      filterBy: [
        { value: "", text: "Order By:" },
        { value: "&ordering=-rating", text: "Rating" },
        { value: "&ordering=-metacritic", text: "Metacritic" },
        { value: "&ordering=-name", text: "Name" },
        { value: "&ordering=-popularity", text: "Popularity" },
        { value: "&ordering=-released", text: "Date Added" },
      ],
      platforms: [
        { value: "", text: "Platform" },
        { value: "&platforms=1", text: "Xbox One" },
        { value: "&platforms=3", text: "iOS" },
        { value: "&platforms=4", text: "PC" },
        { value: "&platforms=5", text: "macOS" },
        { value: "&platforms=6", text: "Linux" },
        { value: "&platforms=7", text: "Nintendo Switch" },
        { value: "&platforms=8", text: "Nintendo 3DS" },
        { value: "&platforms=9", text: "Nintendo DS" },
        { value: "&platforms=10", text: "Wii U" },
        { value: "&platforms=11", text: "Wii" },
      ],
    };
  },
  props: {
    filterRequest: {
      type: Array,
      required: false,
      default: () => ["&dates=2021-01-01,2021-12-31", "", ""],
    },
  },
  watch: {
    currentPage(next) {
      this.$store.dispatch("getBestOf2021ByPage", [
        next,
        this.filterRequest.join(""),
      ]);
      window.scrollTo(0, 0);
    },
    selectedFilter() {
      Vue.set(this.filterRequest, 2, this.selectedFilter);
    },
    selectedPlatform() {
      Vue.set(this.filterRequest, 1, this.selectedPlatform);
    },

    filterRequest: {
      handler(newValue) {
        this.$store.dispatch("getBestOf2021Filter", newValue.join(""));
        this.currentPage = 1;
      },
      deep: true,
    },
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
    move($event) {
      if ($event.pageX < 50) {
        eventBus.$emit("isOpenSideMenu", true);
      } else {
        eventBus.$emit("isOpenSideMenu", false);
      }
    },
  },
  mounted() {
    this.GET_BEST_2021_FROM_API().then((responce) => {
      console.log(responce);
    });
  },
};
</script>
