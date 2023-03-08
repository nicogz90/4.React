import axios from "axios";

export default axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL ||
    "https://ha-react-proyecto-integrador-back-end.vercel.app",
});
