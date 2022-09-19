<template>
  <div class="finalCatalogAndroid catalog">
    <finalHeader />
    <div class="catalog__title d-flex justify-center align-start flex-column">
      <h1 class="catalog__title-text">Games for Android </h1>
      <span class="catalog__title-subtitle mb-3"> Android is a mobile operating system based on Linux kernel. The OS uses open-source code so that any developer can modify it. There is a considerable amount of Android devices from various mobile companies. Android application marketplace — Play Market is the most substantial accumulation of mobile games for one platform with iOS being the second largest one. Partly, such title comes from a little moderation required for an app to be published in the store, so there naturally are many scam apps and viruses there not to mention that any Android app can be pirated relatively easy. The separate bunch of Android devices is gaming consoles on the OS. It is the usual mobile phones but with higher performance values and built-in gamepads for more convenient use. The Google Play Games service was introduced featuring achievements, comparing scores between friends and listing various game tops.</span>
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
            v-model="selectReleaseDate"
            :options="releaseDate"
            :plain="true"
          ></b-form-select>
        </div>
      </div>
    </div>
    <div class="catalog__container">
      <finalCatalogItem
        v-for="(game, gameIndex) in PLATFORMSANDROID.results"
        :key="game.id"
        :product_data="game"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite(gameIndex)"
      />
    </div>
    <div class="overflow-auto catalog__pagination d-flex justify-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="PLATFORMSANDROID.count / perPage"
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
import finalFooter from "./finalFooter.vue";
import Vue from "vue";

export default {
  name: "finalCatalogAndroid",
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
      selectReleaseDate: "",

      filterBy: [
        { value: "", text: "Order By:" },
        { value: "&ordering=-rating", text: "Rating" },
        { value: "&ordering=-metacritic", text: "Metacritic" },
        { value: "&ordering=-name", text: "Name" },
        { value: "&ordering=-popularity", text: "Popularity" },
        { value: "&ordering=-released", text: "Date Added" }
      ],
      releaseDate: [
        { value: "", text: "Release Date" },
        { value: "&dates=2020-01-01,2022-12-31", text: "2020-2022" },
        { value: "&dates=2010-09-01,2019-12-31", text: "2010-2019" },
        { value: "&dates=2000-09-01,2009-12-31", text: "2000-2009" },
        { value: "&dates=1990-09-01,1999-12-31", text: "1990-1999" },
        { value: "&dates=1980-09-01,1989-12-31", text: "1980-1989" },
        { value: "&dates=1970-09-01,1979-12-31", text: "1970-1979" },
        { value: "&dates=1960-09-01,1969-12-31", text: "1960-1969" },
        { value: "&dates=1950-09-01,1959-12-31", text: "1950-1959" }
      ]
    };
  },
  props: {
    filterRequest: {
      type: Array,
      required: false,
      default: () => ["", "&platforms=21", ""]
    }
  },
  watch: {
    currentPage(next) {
      this.$store.dispatch("getPlatformsAndroidByPage", [
        next,
        this.filterRequest.join("")
      ]);
      window.scrollTo(0, 0);
    },
    selectedFilter() {
      Vue.set(this.filterRequest, 2, this.selectedFilter);
    },
    selectReleaseDate() {
      Vue.set(this.filterRequest, 0, this.selectReleaseDate);
    },

    filterRequest: {
      handler(newValue) {
        this.$store.dispatch("getPlatformsAndroidFilter", newValue.join(""));
        this.currentPage = 1;
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(["PLATFORMSANDROID"])
  },
  methods: {
    ...mapActions([
      "GET_PLATFORMS_ANDROID_FROM_API",
      "ADD_TO_FAVORITE",
      "DELETE_FROM_FAVORITE"
    ]),
    deleteFromFavorite(index) {
      this.DELETE_FROM_FAVORITE(index);
    },
    addToFavorite(data) {
      this.ADD_TO_FAVORITE(data);
    }
  },
  mounted() {
    this.GET_PLATFORMS_ANDROID_FROM_API().then((responce) => {
      console.log(responce);
    });
  }
};
</script>
