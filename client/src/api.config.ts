import { vSetupConfig } from "very-good-fetch";

const config = vSetupConfig({
  config: {
    baseUrl: "http://localhost:4000/",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  interceptors: {
    onBeforeRequest(request) {
      console.log("✨ that's a very good request!");
      
      return request;
    },
  }
});

export default config;
