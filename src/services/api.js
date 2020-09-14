import axios from "axios";

const api = axios.create({
  baseURL: "http://164.90.148.78:3040",
});

export default api;
