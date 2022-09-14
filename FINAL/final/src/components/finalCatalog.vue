<template>
  <div class="finalCatalog catalog">
    <h1 class="catalog__title">All Games</h1>
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
    finalCatalogItem,
  },
  data() {
    return {
      perPage: 20,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(["GAMES"]),
  },
  methods: {
    ...mapActions([
      "GET_POPULAR_GAMES_FROM_API",
      "ADD_TO_FAVORITE",
      "DELETE_FROM_FAVORITE",
    ]),
    addToFavorite(data) {
      this.ADD_TO_FAVORITE(data);
    },
    deleteFromFavorite(favoriteGameIndex) {
      this.DELETE_FROM_FAVORITE(favoriteGameIndex);
    },
  },
  mounted() {
    this.GET_POPULAR_GAMES_FROM_API().then((responce) => {
      console.log(responce);
    });
  },
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

  &__title {
    text-align: center;
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
