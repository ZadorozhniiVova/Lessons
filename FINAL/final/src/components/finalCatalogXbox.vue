<template>
  <div class="finalCatalogXbox catalog" @mousemove="move">
    <finalHeader />
    <div class="catalog__title d-flex justify-center align-start flex-column">
      <h1 class="catalog__title-text">Games for Xbox</h1>
      <span class="catalog__title-subtitle mb-3">
        Xbox One is a home video game console released by Microsoft in 2013.
        Unlike its main competitor — PlayStation 4, the accent in the
        development was made in multitasking and using a console as a home media
        player to watch TV, listen to music and play the games. There is three
        hardware option available to gamers: original console, One S version
        (with a smaller body, no external power supply, and native HDR/4k
        support) and One X (pro-gamer-oriented system with updated hardware and
        4k rendering in real time). While PS4 is known for
        exclusive-orientation, Xbox One's games are mostly multi-platform
        titles. This supports Microsoft's initial idea to prevent selling used
        games between the players. However, given the competition from the Sony
        side, the corporation quickly gave up. Among the notable exclusive
        games, there are Sunset Overdrive, Halo 5: Guardians and Forza
        Motorsport 5.</span
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
        v-for="(game, gameIndex) in PLATFORMSXBOX.results"
        :key="game.id"
        :product_data="game"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite(gameIndex)"
      />
    </div>
    <div class="overflow-auto catalog__pagination d-flex justify-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="PLATFORMSXBOX.count / perPage"
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
  name: "finalCatalogXbox",
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
      default: () => ["", "&platforms=1,186,14,80", ""],
    },
  },
  watch: {
    currentPage(next) {
      this.$store.dispatch("getPlatformsXboxByPage", [
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
        this.$store.dispatch("getPlatformsXboxFilter", newValue.join(""));
        this.currentPage = 1;
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(["PLATFORMSXBOX"]),
  },
  methods: {
    ...mapActions([
      "GET_PLATFORMS_XBOX_FROM_API",
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
      if ($event.pageX < 20) {
        eventBus.$emit("isOpenSideMenu", true);
      } else {
        eventBus.$emit("isOpenSideMenu", false);
      }
    },
  },
  mounted() {
    this.GET_PLATFORMS_XBOX_FROM_API().then((responce) => {
      console.log(responce);
    });
  },
};
</script>
