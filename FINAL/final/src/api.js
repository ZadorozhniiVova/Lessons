import axios from "axios";

axios.defaults.baseURL = "GET https://api.rawg.io/api/";

export default {
  getGames() {
    return axios.get("games?key=3d770078d0d8493a8de967ae4f287969");
  },
};
