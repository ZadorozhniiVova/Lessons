<template>
  <div class="finalCatalog catalog">
    <div class="catalog__title d-flex justify-start align-end">
      <h1>All Games</h1>

      <div>
        <b-form-select
          v-model="selectedFilter"
          :options="filterBy"
          plain="true"
        ></b-form-select>
      </div>
      <div>
        <b-form-select
          v-model="selectedPlatform"
          :options="platforms"
          plain="true"
        ></b-form-select>
      </div>
      <div>
        <b-form-select
          v-model="selectReleaseDate"
          :options="releaseDate"
          plain="true"
        ></b-form-select>
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

export default {
  name: "finalCatalog",
  components: {
    finalCatalogItem
  },
  data() {
    return {
      perPage: 20,
      currentPage: 1,
      selectedFilter: null,
      selectedPlatform: null,
      selectReleaseDate: null,
      filterBy: [
        { value: null, text: "Order By:" },
        { value: "ordering=-rating", text: "Rating" },
        { value: "ordering=-metacritic ", text: "Metacritic" },
        { value: "ordering=-name", text: "Name" },
        { value: "ordering=-popularity", text: "Popularity" },
        { value: "ordering=-released", text: "Date Added" }
      ],
      platforms: [
        { value: null, text: "Platform" },
        { value: "1", text: "Xbox One" },
        { value: "3", text: "iOS" },
        { value: "4", text: "PC" },
        { value: "5", text: "macOS" },
        { value: "6", text: "Linux" },
        { value: "7", text: "Nintendo Switch" },
        { value: "8", text: "Nintendo 3DS" },
        { value: "9", text: "Nintendo DS" },
        { value: "10", text: "Wii U" },
        { value: "11", text: "Wii" }
      ],
      releaseDate: [
        { value: null, text: "Release Date" },
        { value: "dates=2020-01-01,2022-12-31", text: "2020-2022" },
        { value: "dates=2010-09-01,2019-12-31", text: "2010-2019" },
        { value: "dates=2000-09-01,2009-12-31", text: "2000-2009" },
        { value: "dates=1990-09-01,1999-12-31", text: "1990-1999" },
        { value: "dates=1980-09-01,1989-12-31", text: "1980-1989" },
        { value: "dates=1970-09-01,1979-12-31", text: "1970-1979" },
        { value: "dates=1960-09-01,1969-12-31", text: "1960-1969" },
        { value: "dates=1950-09-01,1959-12-31", text: "1950-1959" }
      ]
    };
  },
  watch: {
    currentPage(next) {
      this.$store.dispatch("getPopularByPage", next);
      window.scrollTo(0, 30);
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
      console.log(responce);
    });
  }
};
</script>

<style lang="scss">
.catalog {
  color: white;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;

  &__title {
    text-align: left;
    width: 90%;
    padding: 0 40px;
    margin: 0 auto;

    .form-control {
  display: flex;
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;

  margin: 0 4px  !important;
  -webkit-box-flex: 0;
  width: auto;
  min-width: 150px;
  padding: 5px 16px;
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
    padding-bottom: 250px;
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
