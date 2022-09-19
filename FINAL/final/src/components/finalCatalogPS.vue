<template>
  <div class="finalCatalogPS catalog">
    <finalHeader />
    <div class="catalog__title d-flex justify-center align-start flex-column">
      <h1 class="catalog__title-text">Games for PlayStation </h1>
      <span class="catalog__title-subtitle mb-3"> PlayStation is a home video game console launched by Sony. There are currently three versions of the hardware variations: original console (also called "fat"); a slim version with optical audio output removed, weight and size reduced as well as USB interfaces differently placed; and Pro version with 4k and HDR support added and PS VR functions improved. PS4 supports VR with the special helmet called PS VR. The starting game lineup of the system is considered to be a one of the most successful in history. The console maintains the status of an exclusive-oriented platform with many remasters and Playstation-only games. Together with the start of the system, there was a multiplayer requirement introduced — now everyone seeking to play via PlayStation Network must have PS Plus active. It is a paid subscription granting the player 5 games per month for all three platforms.</span>
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
        v-for="(game, gameIndex) in PLATFORMSPS.results"
        :key="game.id"
        :product_data="game"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite(gameIndex)"
      />
    </div>
    <div class="overflow-auto catalog__pagination d-flex justify-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="PLATFORMSPS.count / perPage"
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
      default: () => ["", "&platforms=187,18,16,15,27,19,17", ""]
    }
  },
  watch: {
    currentPage(next) {
      this.$store.dispatch("getPlatformsPsByPage", [
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
        this.$store.dispatch("getPlatformsPsFilter", newValue.join(""));
        this.currentPage = 1;
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(["PLATFORMSPS"])
  },
  methods: {
    ...mapActions([
      "GET_PLATFORMS_PS_FROM_API",
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
    this.GET_PLATFORMS_PS_FROM_API().then((responce) => {
      console.log(responce);
    });
  }
};
</script>
