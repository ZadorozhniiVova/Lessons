<template>
  <div class="finalCatalogBestYear catalog">
    <finalHeader />
    <div class="catalog__title d-flex justify-center align-start flex-column">
      <h1 class="catalog__title-text">Best of the year</h1>
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
import Vue from "vue";

export default {
  name: "finalCatalogBestYear",
  components: {
    finalCatalogItem,
    finalHeader,
    finalFooter
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
        { value: "&ordering=-released", text: "Date Added" }
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
        { value: "&platforms=11", text: "Wii" }
      ]
    };
  },
  props: {
    filterRequest: {
      type: Array,
      required: false,
      default: () => ["&dates=2022-01-01,2022-12-31", "", ""]
    }
  },
  watch: {
    currentPage(next) {
      this.$store.dispatch("getBestOfYearByPage", [
        next,
        this.filterRequest.join("")
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
        this.$store.dispatch("getBestOfYearFilter", newValue.join(""));
        this.currentPage = 1;
      },
      deep: true
    }
  },
  methods: {
    ...mapActions([
      "GET_BEST_OF_YEAR_FROM_API",
      "ADD_TO_FAVORITE",
      "DELETE_FROM_FAVORITE"
    ]),
    deleteFromFavorite(bestOfYearIndex) {
      this.DELETE_FROM_FAVORITE(bestOfYearIndex);
    },
    addToFavorite(data) {
      this.ADD_TO_FAVORITE(data);
    }
  },
  mounted() {
    this.GET_BEST_OF_YEAR_FROM_API().then((responce) => {
      console.log(responce);
    });
  },

  computed: {
    ...mapGetters(["BESTOFYEAR"])
  }
};
</script>
