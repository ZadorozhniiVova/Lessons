import axios from "axios";

export default {
  data(){
    return{
    }
  },
  getPopularByPageFromApi(key,page) {
    return axios.get(`https://api.rawg.io/api/games?&key=${key}&ordering=-popularity&page=${page}`);
  },
  getBestOfYearByPageFromApi(key,page) {
    return axios.get(`https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-31&key=${key}&rating&page=${page}`);
  },
  getBestOf2021ByPageFromApi(key,page) {
    return axios.get(`https://api.rawg.io/api/games?dates=2021-01-01%2C2021-12-31&key=${key}&rating&page=${page}`);
  },
  getBestOfAllTimeByPageFromApi(key,page) {
    return axios.get(`https://api.rawg.io/api/games?dates=1950-01-01%2C2022-12-31&key=${key}&rating&page=${page}`);
  },
  
};