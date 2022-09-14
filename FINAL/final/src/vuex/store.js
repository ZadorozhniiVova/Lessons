import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    key: "a93f8e4bce884b11ae59a173f67e656c",
    games: [],
    favorite: [],
    bestOfYear: [],
    bestOf2021: [],
    bestOfAllTime: [],
  },
  mutations: {
    SET_GAMES_TO_STATE: (state, games) => {
      state.games = games;
    },
    SET_FAVORITE: (state, favoriteGame) => {
      if (state.favorite.length) {
        let isGameExists = false;
        state.favorite.map(function (item) {
          if (item.id === favoriteGame.id) {
            isGameExists = true;
          }
        });
        if (!isGameExists) {
          state.favorite.push(favoriteGame);
        }
      } else {
        state.favorite.push(favoriteGame);
      }
    },
    DELETE_FROM_FAVORITE: (state, favoriteGameIndex) => {
      state.favorite.splice(favoriteGameIndex, 1);
    },
    SET_BEST_OF_YEAR_TO_STATE: (state, bestOfYear) => {
      state.bestOfYear = bestOfYear;
    },
    SET_BEST_OF_2021_TO_STATE: (state, bestOf2021) => {
      state.bestOf2021 = bestOf2021;
    },
    SET_BEST_OF_ALL_TIME: (state, bestOfAllTime) => {
      state.bestOfAllTime = bestOfAllTime;
    },
  },
  actions: {
    GET_POPULAR_GAMES_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?dates=2022-01-01,2022-09-01&key=${this.state.key}`,
        {
          method: "GET",
        }
      )
        .then((games) => {
          commit("SET_GAMES_TO_STATE", games.data);
          return games;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    GET_BEST_OF_YEAR_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?dates=2022-01-01,2022-12-31&ordering=-rating&key=${this.state.key}`,
        { method: "GET" }
      )
        .then((bestOfYear) => {
          commit("SET_BEST_OF_YEAR_TO_STATE", bestOfYear.data);
          return bestOfYear;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_BEST_2021_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&ordering=-rating&key=${this.state.key}`,
        { method: "GET" }
      )
        .then((bestOf2021) => {
          commit("SET_BEST_OF_2021_TO_STATE", bestOf2021.data);
          return bestOf2021;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_POPULAR_ALL_TIME({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?dates=1950-01-01,2022-12-31&ordering=-rating&key=${this.state.key}`,
        { method: "GET" }
      )
        .then((bestOfAllTime) => {
          commit("SET_BEST_OF_ALL_TIME", bestOfAllTime.data);
          return bestOfAllTime;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_FAVORITE({ commit }, favoriteGame) {
      commit("SET_FAVORITE", favoriteGame);
    },
    DELETE_FROM_FAVORITE({ commit }, favoriteGameIndex) {
      commit("DELETE_FROM_FAVORITE", favoriteGameIndex);
    },
  },
  getters: {
    GAMES(state) {
      return state.games;
    },
    FAVORITE(state) {
      return state.favorite;
    },
    BESTOFYEAR(state) {
      return state.bestOfYear;
    },
    BESTOF2021(state) {
      return state.bestOf2021;
    },
    BESTOFALLTIME(state) {
      return state.bestOfAllTime;
    },
  },
});

export default store;
