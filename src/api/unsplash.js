import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9eba10ad2fff362f990e47b2bd463fd3072867b7955efdd3598f9aba6679b31a"
  }
});
