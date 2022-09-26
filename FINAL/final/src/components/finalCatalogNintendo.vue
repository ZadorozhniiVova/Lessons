<template>
  <div class="finalCatalogNintendo catalog" @mousemove="move">
    <finalHeader />
    <div class="catalog__title d-flex justify-center align-start flex-column">
      <h1 class="catalog__title-text">Games for Nintendo</h1>
      <span class="catalog__title-subtitle mb-3">
        Nintendo Switch is a hybrid video game console made by Nintendo. The
        system represents a tablet-like device with a touchscreen with
        detachable controllers on the sides. The system can be inserted into a
        docking station connected to the TV and serve as a home console. This
        allows the games on the system to be played both on a big screen or in
        the handheld with no need to reset the system to change the modes. The
        central controller for the Switch is a pair of Joy-Cons – small
        controllers both of which feature four face buttons, an analog stick,
        two side buttons, and high-definition vibration. The controllers can be
        used separately by different players, together using a grip accessory or
        attached to the system in handheld mode. Unlike many previous Nintendo
        consoles, as for 2019, the system has strong support from third-party
        developers, especially from the indie scene. The Switch introduced
        Nintendo Switch Online, a subscription-based service that resembles Xbox
        Live Gold and PlayStation Plus. It allows players to play online
        multiplayer, offers a selection of classic Nintendo games and lets
        players use cloud saves.</span
      >
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
        v-for="(game, gameIndex) in PLATFORMSNINTENDO.results"
        :key="game.id"
        :product_data="game"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite(gameIndex)"
      />
    </div>
    <div class="overflow-auto catalog__pagination d-flex justify-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="PLATFORMSNINTENDO.count / perPage"
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
import { eventBus } from "../main";

export default {
  name: "finalCatalogNintendo",
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
      selectReleaseDate: "",

      filterBy: [
        { value: "", text: "Order By:" },
        { value: "&ordering=-rating", text: "Rating" },
        { value: "&ordering=-metacritic", text: "Metacritic" },
        { value: "&ordering=-name", text: "Name" },
        { value: "&ordering=-popularity", text: "Popularity" },
        { value: "&ordering=-released", text: "Date Added" },
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
        { value: "&dates=1950-09-01,1959-12-31", text: "1950-1959" },
      ],
    };
  },
  props: {
    filterRequest: {
      type: Array,
      required: false,
      default: () => ["", "&platforms=7,8,9,13,83", ""],
    },
  },
  watch: {
    currentPage(next) {
      this.$store.dispatch("getPlatformsNintendoByPage", [
        next,
        this.filterRequest.join(""),
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
        this.$store.dispatch("getPlatformsNintendoFilter", newValue.join(""));
        this.currentPage = 1;
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(["PLATFORMSNINTENDO"]),
  },
  methods: {
    ...mapActions([
      "GET_PLATFORMS_NINTENDO_FROM_API",
      "ADD_TO_FAVORITE",
      "DELETE_FROM_FAVORITE",
    ]),
    deleteFromFavorite(index) {
      this.DELETE_FROM_FAVORITE(index);
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
    this.GET_PLATFORMS_NINTENDO_FROM_API().then((responce) => {
      console.log(responce);
    });
  },
};
</script>
