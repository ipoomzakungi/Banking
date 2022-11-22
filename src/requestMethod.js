import axios from "axios";

const BASE_URL = "https://2e5f-110-164-126-99.ap.ngrok.io/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
