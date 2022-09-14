import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://api.rawg.io/api/",
    key: "3d770078d0d8493a8de967ae4f287969",
  });
};
