import Vue from "vue";
import Vuex from "vuex";
import Api from "../service/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games: [],
    platforms: [],
    popularGames: [],
  },

  getters: {
    games(state) {
      return state.games;
    },
    platforms(state) {
      return state.gaplatformsmes;
    },
    popularGames(state) {
      return state.popularGames;
    },
  },

  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
    SET_PLATFORMS(state, platforms) {
      state.platforms = platforms;
    },
    SET_STORES(state, stores) {
      state.stores = stores;
    },
    SET_POPULARGAMES(state, stores) {
      state.stores = stores;
    },
  },

  actions: {
    async loadAllGames({ commit }) {
      let response = await Api().get(
        "games?key=aa0261996cd54584b28260614f7a2d1b"
      );
      commit("SET_GAMES", response.data);
    },
    async loadAllPlatforms({ commit }) {
      let response = await Api().get(
        "platforms?key=aa0261996cd54584b28260614f7a2d1b"
      );
      commit("SET_PLATFORMS", response.data);
    },
    async findStore({ commit }, gameId) {
      let response = await Api().get(
        `games/${gameId}/stores?&key=aa0261996cd54584b28260614f7a2d1b`
      );
      commit("SET_STORES", {
        name: response.data.results.store_id,
        value: response.data.results.url,
      });
      console.log("SET_STORES", {
        name: response.data.results.store_id,
        value: response.data.results.url,
      });
    },
  },

  modules: {},
});
