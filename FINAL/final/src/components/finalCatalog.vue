<template>
  <div class="finalCatalog catalog">
    <div class="catalog__title d-flex justify-center align-start flex-column">
      <h1 class="catalog__title-text">All Games</h1>
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
        v-for="(game, favoriteGameIndex) in GAMES.results"
        :key="game.id"
        :product_data="game"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite(favoriteGameIndex)"
      />
    </div>
    <div class="overflow-auto catalog__pagination d-flex justify-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="GAMES.count / perPage"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import finalCatalogItem from "./finalCatalogItem";
import { mapActions, mapGetters } from "vuex";
import Vue from "vue";

export default {
  name: "finalCatalog",
  components: {
    finalCatalogItem
  },
  data() {
    return {
      perPage: 20,
      currentPage: 1,
      selectedFilter: "",
      selectedPlatform: "",
      selectReleaseDate: "",

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
        { value: "&platforms=4", text: "PC" },
        { value: "&platforms=1,186,14,80", text: "Xbox" },
        { value: "&platforms=187,18,16,15,27,19,17", text: "Sony Playstation" },
        { value: "&platforms=7,8,9,13,83", text: "Nintendo" },
        { value: "&platforms=10,11", text: "Wii" },
        { value: "&platforms=3,41", text: "iOS" },
        { value: "&platforms=21", text: "Android" },
        { value: "&platforms=5,55", text: "macOS" },
        { value: "&platforms=6", text: "Linux" },
        { value: "&platforms=24,43,26", text: "Game Boy" },
        { value: "&platforms=107,119,117,74", text: "Sega" },
        { value: "&platforms=28,31,23,22,25,34,46,50", text: "Atari" },
        { value: "&platforms=79,49", text: "SNES" },
        { value: "&platforms=167", text: "Genesis" },
        { value: "&platforms=106", text: "DreamCast" },
        { value: "&platforms=105", text: "GameCube" },
        { value: "&platforms=166", text: "Commodore / Amiga" },
        { value: "&platforms=111", text: "3DO" },
        { value: "&platforms=112", text: "Jaguar" },
        { value: "&platforms=77", text: "GameGear" },
        { value: "&platforms=12", text: "Neo Geo" },
    


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
      default: () => ["", "", "&ordering=-popularity"]
    }
  },
  watch: {
    currentPage(next) {
      this.$store.dispatch("getPopularByPage", [
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
    selectReleaseDate() {
      Vue.set(this.filterRequest, 0, this.selectReleaseDate);
    },
    filterRequest: {
      handler(newValue) {
        this.$store.dispatch("getPopularFilter", newValue.join(""));
        this.currentPage = 1;
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(["GAMES"])
  },
  methods: {
    ...mapActions([
      "GET_POPULAR_GAMES_FROM_API",
      "ADD_TO_FAVORITE",
      "DELETE_FROM_FAVORITE"
    ]),
    addToFavorite(data) {
      this.ADD_TO_FAVORITE(data);
    },
    deleteFromFavorite(favoriteGameIndex) {
      this.DELETE_FROM_FAVORITE(favoriteGameIndex);
    }
  },
  mounted() {
    this.GET_POPULAR_GAMES_FROM_API().then((responce) => {
      // console.log(responce);
    });
  }
};
</script>

<style lang="scss">
.catalog {
  color: white;
  background-color: #151515;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;

  &__title {
    text-align: left;
    width: 88%;

    margin: 0 auto;

    &-text{
      font-size: 72px;
    line-height: 74px;
    font-weight: 700;
    text-transform: uppercase;
    }
    .form-control {
      display: flex;
      flex: 0 0 auto;
      -webkit-box-align: center;
      -webkit-box-pack: center;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      margin: 0 4px !important;
      -webkit-box-flex: 0;
      width: auto;
      min-width: 125px;
      padding: 3px 2px;
      background-color: hsla(0, 0%, 100%, 0.07) !important;
      border-radius: 8px;
      font-size: 14px;
      color: #fff !important;
      cursor: pointer;

      &:focus {
        border-color: #6dc849 !important;
        outline: 0;
        box-shadow: 0 0 0 0.25rem #6dc849 !important;
      }
      option {
        background-color: black !important;
        padding: 5px 0 !important;
        color: #fff !important;
        font-size: 16px !important;
        text-align: center;
        display: inline-block;
        height: 20px;
        border: 1px solid white !important;
      }
    }
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    padding: 0 80px 250px;
  }
  &__pagination {
    padding-bottom: 180px;
  }
}

.page-link {
  background-color: black !important;
  border: 1px solid #6dc849 !important;

  &:hover {
    color: #6dc849 !important;
  }
  &:focus {
    color: #6dc849 !important;
    -webkit-box-shadow: 0px 0px 40px 5px rgba(#6dc849, 0.5) !important;
    -moz-box-shadow: 0px 0px 40px 5px rgba(#6dc849, 0.5) !important;
    box-shadow: 0px 0px 40px 5px rgba(#6dc849, 0.5) !important;
  }
  &:active {
    color: #6dc849 !important;
    -webkit-box-shadow: 0px 0px 40px 5px rgba(#6dc849, 0.5) !important;
    -moz-box-shadow: 0px 0px 40px 5px rgba(#6dc849, 0.5) !important;
    box-shadow: 0px 0px 40px 5px rgba(#6dc849, 0.5) !important;
  }
}

.page-item.active {
  .page-link {
    background-color: #6dc849 !important;
    border: 1px solid black !important;
    color: black !important;

    &:active {
      color: #6dc849 !important;
      -webkit-box-shadow: 0px 0px 40px 5px rgba(#6dc849, 0.5) !important;
      -moz-box-shadow: 0px 0px 40px 5px rgba(#6dc849, 0.5) !important;
      box-shadow: 0px 0px 40px 5px rgba(#6dc849, 0.5) !important;
    }
  }
}
</style>
