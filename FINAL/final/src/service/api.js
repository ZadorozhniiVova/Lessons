import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://api.rawg.io/api/",
    key: "fa71b951c31e4e3b9af2efbdf3fe7c97",
  });
};
