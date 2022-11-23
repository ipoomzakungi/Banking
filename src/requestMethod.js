import axios from "axios";

const BASE_URL = "https://9018-223-24-186-108.ap.ngrok.io/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2YTZmNDA5LTQyZDAtNDQ4MC1hMDg2LThiZmJiNTI5Y2IyNCIsImZpcnN0TmFtZSI6InRlc3QxIiwibWlkZGxlTmFtZSI6InQxIiwibGFzdE5hbWUiOiJUZXN0MSIsInRpbWVfc3RhbXAiOiIyMDIyLTExLTIyVDIzOjQ4OjE0LjM2OFoiLCJpYXQiOjE2NjkxNjA4OTQsImV4cCI6MTY2OTE2MTc5NH0.a9hW2VxG9pVdYHSxwf5IXyhgOXAbW4VaLK1yesWfajA"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   "ngrok-skip-browser-warning": `Bearer`,
  //   Authorization: `Bearer ${refresh_TOKEN}`,
  // },
});

export const userRequest = axios.create({
    
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}`},
});