import { config } from "ar-catch";

config({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})
