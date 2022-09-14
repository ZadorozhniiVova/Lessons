import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    games: [],
    favorite: []
  },
  mutations: {
    SET_GAMES_TO_STATE: (state, games) => {
      state.games = games;
    },
    SET_FAVORITE:(state, favoriteGame) => {
      if(state.favorite.length){
        let isGameExists = false;
        state.favorite.map(function(item){
          if(item.id === favoriteGame.id){
            isGameExists = true
          }
        })
        if(!isGameExists){
          state.favorite.push(favoriteGame)
        }
      }else{
        state.favorite.push(favoriteGame)
      }
    },
    DELETE_FROM_FAVORITE:(state, favoriteGameIndex) => {
      state.favorite.splice(favoriteGameIndex, 1)
    }
  },
  actions: {
    GET_POPULAR_GAMES_FROM_API({ commit }) {
      return axios(
        'https://api.rawg.io/api/games?dates=2022-01-01,2022-09-01&key=3d770078d0d8493a8de967ae4f287969', {
          method: "GET"
        })
        .then((games) => {
          commit("SET_GAMES_TO_STATE", games.data);
          return games;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_FAVORITE({commit}, favoriteGame){
      commit("SET_FAVORITE", favoriteGame);
    },
    DELETE_FROM_FAVORITE({commit}, favoriteGameIndex){
      commit("DELETE_FROM_FAVORITE", favoriteGameIndex)
    }
  },
  getters: {
    GAMES(state) {
      return state.games;
    },
    FAVORITE(state){
        return state.favorite
    }
  }
});

export default store;
