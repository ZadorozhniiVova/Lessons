import axios from "axios";

export default {
  data() {
    return {};
  },
  getPopularFilterFromApi(key, filterRequest){
    console.log("getPopularFilterFromApi",`https://api.rawg.io/api/games?&key=${key}${filterRequest}&page=1`)
    return axios.get(
      `https://api.rawg.io/api/games?&key=${key}${filterRequest}&page=1`
    )
  },
  getPopularByPageFromApi(key, page , filterRequest) {
    console.log("getPopularByPageFromApi",`https://api.rawg.io/api/games?&key=${key}${filterRequest}&page=${page}`)
    return axios.get(
      `https://api.rawg.io/api/games?&key=${key}${filterRequest}&page=${page}`
    );
      
  },

  getBestOfYearByPageFromApi(key, page) {
    return axios.get(
      `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-31&key=${key}&rating&page=${page}`
    );
  },
  getBestOf2021ByPageFromApi(key, page) {
    return axios.get(
      `https://api.rawg.io/api/games?dates=2021-01-01%2C2021-12-31&key=${key}&rating&page=${page}`
    );
  },
  getBestOfAllTimeByPageFromApi(key, page) {
    return axios.get(
      `https://api.rawg.io/api/games?dates=1950-01-01%2C2022-12-31&key=${key}&rating&page=${page}`
    );
  },
};
