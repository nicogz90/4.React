import axios from "axios";

export default axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL || "https://ng-twitter-back-end.vercel.app",
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
});
