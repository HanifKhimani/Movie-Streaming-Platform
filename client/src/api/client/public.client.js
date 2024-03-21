import axios from "axios";
import queryString from "query-string";

const baseURL ="http://localhost:5000";  // TODO: REPLACE IT WHEN YOU HOST YOUR SERVER. FOR LOCAL DO NOT CHANGE

const publicClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  }
});
console.log("🚀 ~ publicClient:", publicClient)

publicClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json"
    }
  };
});

publicClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (err) => {
  throw err.response.data;
});

export default publicClient;