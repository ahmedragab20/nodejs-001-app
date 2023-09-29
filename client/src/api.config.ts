import { config } from "ar-catch";

config({
  baseURL: "http://localhost:4000/",
  defaultOptions: {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  }
})
