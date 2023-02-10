import axios from "axios";

const createApi = (token: string) => {
  return axios.create({
    baseURL: "https://smalltalk.uk.auth0.com/api/v2/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default createApi;
