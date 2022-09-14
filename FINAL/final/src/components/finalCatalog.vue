<template>
  <div class="finalCatalog">
    <h1 class="finalCatalog__title">All Games</h1>
    <div class="finalCatalog__container">
      <finalCatalogItem
        v-for="game in GAMES.results"
        :key="game.id"
        :product_data="game"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite(index)"
      />
    </div>
  </div>
</template>

<script>
import finalCatalogItem from "./finalCatalogItem";
import axios from "axios";
import Api from "../service/api";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "finalCatalog",
  components: {
    finalCatalogItem

  },
  data() {
    return {
      stores: [],
      popularGames: []
    };
  },
  //   async mounted() {
  //     let popularGames = await axios.get(
  //       "https://api.rawg.io/api/games?dates=2022-01-01,2022-09-01&key=3d770078d0d8493a8de967ae4f287969"
  //     );
  //     console.log("POPULAR", popularGames.data.results);
  //     this.popularGames = popularGames.data.results;

  //     //поиск магазина
  //     const markets = await Api().get(
  //       `games/${popularGames.data.results.id}/stores?&key=3d770078d0d8493a8de967ae4f287969`
  //     );
  //     this.store = markets.data.results;
  //     console.log(this.store);
  //     console.log("GAME", this.popularGames);
  //   },
  computed: {
    ...mapGetters(["GAMES"])
  },
  methods: {
    ...mapActions(["GET_POPULAR_GAMES_FROM_API", "ADD_TO_FAVORITE", "DELETE_FROM_FAVORITE"]),
    addToFavorite(data) {
      this.ADD_TO_FAVORITE(data);
    },
    deleteFromFavorite(favoriteGameIndex) {
      this.DELETE_FROM_FAVORITE(favoriteGameIndex)
    }
  },
  mounted() {
    this.GET_POPULAR_GAMES_FROM_API()
    .then((responce) =>{
        if(responce.data){
            console.log('data arrived')
        }
    })
  }
};
</script>

<style lang="scss" scopped>
.finalCatalog {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;

  &__title {
    text-align: center;
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
