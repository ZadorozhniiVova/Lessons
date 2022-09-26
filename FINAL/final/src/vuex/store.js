import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Api from "../api";
import { eventBus } from "../main";

//auth
import router from "@/router/routes";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    key: "fa71b951c31e4e3b9af2efbdf3fe7c97",
    games: [],
    favorite: [],
    bestOfYear: [],
    bestOf2021: [],
    bestOfAllTime: [],
    platformsPC: [],
    platformsPS: [],
    platformsXbox: [],
    platformsNintendo: [],
    platformsIos: [],
    platformsAndroid: [],
    //auth
    user: null,
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
    SET_PLATFORMS_PC: (state, platform) => {
      state.platformsPC = platform;
    },
    SET_PLATFORMS_PS: (state, platform) => {
      state.platformsPS = platform;
    },
    SET_PLATFORMS_XBOX: (state, platform) => {
      state.platformsXbox = platform;
    },
    SET_PLATFORMS_NINTENDO: (state, platform) => {
      state.platformsNintendo = platform;
    },
    SET_PLATFORMS_IOS: (state, platform) => {
      state.platformsIos = platform;
    },
    SET_PLATFORMS_ANDROID: (state, platform) => {
      state.platformsAndroid = platform;
    },

    //auth
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    GET_POPULAR_GAMES_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?&ordering=-popularity&key=${this.state.key}`,
        {
          method: "GET",
        }
      )
        .then((games) => {
          commit("SET_GAMES_TO_STATE", games.data);
          // console.log("page", games.data)
          return games;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPopularFilter({ commit }, filterRequest) {
      Api.getFilterFromApi(this.state.key, filterRequest)
        .then((responce) => {
          commit("SET_GAMES_TO_STATE", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPopularByPage({ commit }, [page, filterRequest]) {
      Api.getPageFromApi(this.state.key, page, filterRequest)
        .then((responce) => {
          commit("SET_GAMES_TO_STATE", responce.data);
          // console.log("bestOfYear", popular);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    GET_BEST_OF_YEAR_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?dates=2022-01-01,2022-12-31&rating&key=${this.state.key}`,
        { method: "GET" }
      )
        .then((responce) => {
          commit("SET_BEST_OF_YEAR_TO_STATE", responce.data);
          console.log("bestOfYear", responce);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    getBestOfYearFilter({ commit }, filterRequest) {
      Api.getFilterFromApi(this.state.key, filterRequest)
        .then((responce) => {
          commit("SET_BEST_OF_YEAR_TO_STATE", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getBestOfYearByPage({ commit }, [page, filterRequest]) {
      Api.getPageFromApi(this.state.key, page, filterRequest)
        .then((responce) => {
          commit("SET_BEST_OF_YEAR_TO_STATE", responce.data);
          // console.log("bestOfYear", popular);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    GET_BEST_2021_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&rating&key=${this.state.key}`,
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
    getBestOf2021Filter({ commit }, filterRequest) {
      Api.getFilterFromApi(this.state.key, filterRequest)
        .then((responce) => {
          commit("SET_BEST_OF_2021_TO_STATE", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getBestOf2021ByPage({ commit }, [page, filterRequest]) {
      Api.getPageFromApi(this.state.key, page, filterRequest)
        .then((responce) => {
          commit("SET_BEST_OF_2021_TO_STATE", responce.data);
          // console.log("bestOfYear", popular);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    GET_POPULAR_ALL_TIME({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?dates=1950-01-01,2022-12-31&rating&key=${this.state.key}`,
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

    getBestOfAllTimeFilter({ commit }, filterRequest) {
      Api.getFilterFromApi(this.state.key, filterRequest)
        .then((responce) => {
          commit("SET_BEST_OF_ALL_TIME", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getBestOfAllTimeByPage({ commit }, [page, filterRequest]) {
      Api.getPageFromApi(this.state.key, page, filterRequest)
        .then((responce) => {
          commit("SET_BEST_OF_ALL_TIME", responce.data);
          // console.log("bestOfYear", popular);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    GET_PLATFORMS_PC_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?platforms=4&key=${this.state.key}`,
        { method: "GET" }
      )
        .then((responce) => {
          commit("SET_PLATFORMS_PC", responce.data);
          console.log("SET_PLATFORMS_PC", responce);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsPcFilter({ commit }, filterRequest) {
      Api.getFilterFromApi(this.state.key, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_PC", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsPcByPage({ commit }, [page, filterRequest]) {
      Api.getPageFromApi(this.state.key, page, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_PC", responce.data);
          // console.log("bestOfYear", popular);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    GET_PLATFORMS_PS_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?platforms=187,18,16,15,27,19,17&key=${this.state.key}`,
        { method: "GET" }
      )
        .then((responce) => {
          commit("SET_PLATFORMS_PS", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsPsFilter({ commit }, filterRequest) {
      Api.getFilterFromApi(this.state.key, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_PS", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsPsByPage({ commit }, [page, filterRequest]) {
      Api.getPageFromApi(this.state.key, page, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_PS", responce.data);
          // console.log("bestOfYear", popular);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    GET_PLATFORMS_XBOX_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?platforms=1,186,14,80&key=${this.state.key}`,
        { method: "GET" }
      )
        .then((responce) => {
          commit("SET_PLATFORMS_XBOX", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsXboxFilter({ commit }, filterRequest) {
      Api.getFilterFromApi(this.state.key, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_XBOX", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsXboxByPage({ commit }, [page, filterRequest]) {
      Api.getPageFromApi(this.state.key, page, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_XBOX", responce.data);
          // console.log("bestOfYear", popular);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    GET_PLATFORMS_NINTENDO_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?platforms=7,8,9,13,83&key=${this.state.key}`,
        { method: "GET" }
      )
        .then((responce) => {
          commit("SET_PLATFORMS_NINTENDO", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsNintendoFilter({ commit }, filterRequest) {
      Api.getFilterFromApi(this.state.key, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_NINTENDO", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsNintendoByPage({ commit }, [page, filterRequest]) {
      Api.getPageFromApi(this.state.key, page, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_NINTENDO", responce.data);
          // console.log("bestOfYear", popular);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_PLATFORMS_IOS_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?platforms=3&key=${this.state.key}`,
        { method: "GET" }
      )
        .then((responce) => {
          commit("SET_PLATFORMS_IOS", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsIosFilter({ commit }, filterRequest) {
      Api.getFilterFromApi(this.state.key, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_IOS", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsIosByPage({ commit }, [page, filterRequest]) {
      Api.getPageFromApi(this.state.key, page, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_IOS", responce.data);
          // console.log("bestOfYear", popular);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_PLATFORMS_ANDROID_FROM_API({ commit }) {
      return axios(
        `https://api.rawg.io/api/games?platforms=21&key=${this.state.key}`,
        { method: "GET" }
      )
        .then((responce) => {
          commit("SET_PLATFORMS_ANDROID", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsAndroidFilter({ commit }, filterRequest) {
      Api.getFilterFromApi(this.state.key, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_ANDROID", responce.data);
          return responce;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    getPlatformsAndroidByPage({ commit }, [page, filterRequest]) {
      Api.getPageFromApi(this.state.key, page, filterRequest)
        .then((responce) => {
          commit("SET_PLATFORMS_ANDROID", responce.data);
          // console.log("bestOfYear", popular);
          return responce;
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

    //auth
    async login({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push({ path: "/favorite" });
      eventBus.$emit("showLoginModal", false);
    },
    async register({ commit }, details) {
      const { email, password } = details;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalide-email":
            alert("Invalid email");
            break;
          case "auth/operation-not-allowed":
            alert("Opeartion not allowed");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push({ path: "/favorite" });
      eventBus.$emit("showLoginModal", false);
    },
    async logout({ commit }) {
      await signOut(auth);
      commit("CLEAR_USER");
      router.push("/");
    },

    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit("CLEAR_USER", user);
          if (router.isReady() && router.currentRoute.value.path === "/") {
            router.push("/");
          }
        }
      });
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
    PLATFORMSPC(state) {
      return state.platformsPC;
    },
    PLATFORMSPS(state) {
      return state.platformsPS;
    },
    PLATFORMSXBOX(state) {
      return state.platformsXbox;
    },
    PLATFORMSNINTENDO(state) {
      return state.platformsNintendo;
    },
    PLATFORMSIOS(state) {
      return state.platformsIos;
    },
    PLATFORMSANDROID(state) {
      return state.platformsAndroid;
    },
  },
  modules: {
    auth,
  },
});

export default store;
