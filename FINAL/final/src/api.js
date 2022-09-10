import axios from "axios";

axios.defaults.baseURL = "GET https://api.rawg.io/api/";

export default {
  getGames() {
    return axios.get("games?key=aa0261996cd54584b28260614f7a2d1b");
  },
};
