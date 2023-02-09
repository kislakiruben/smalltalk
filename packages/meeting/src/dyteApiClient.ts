import axios from "axios";

export default axios.create({
  baseURL: "https://api.cluster.dyte.in/v2",
  auth: {
    username: process.env.REACT_APP_DYTE_ORG_ID as string,
    password: process.env.REACT_APP_DYTE_API_KEY as string,
  },
});
