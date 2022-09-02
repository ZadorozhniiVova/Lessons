import axios from "axios";

axios.defaults = "https://rickandmortyapi.com/api/";

export default {
  getCharacters() {
    return axios.get(character);
  },
};
