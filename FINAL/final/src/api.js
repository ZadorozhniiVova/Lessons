import axios from "axios";

export default {
  data() {
    return {};
  },
  getFilterFromApi(key, filterRequest) {
    // console.log(
    //   "getFilterFromApi",
    //   `https://api.rawg.io/api/games?&key=${key}${filterRequest}&page=1`
    // );
    return axios.get(
      `https://api.rawg.io/api/games?&key=${key}${filterRequest}&page=1`
    );
  },
  getPageFromApi(key, page, filterRequest) {
    return axios.get(
      `https://api.rawg.io/api/games?&key=${key}${filterRequest}&page=${page}`
    );
  },
};
