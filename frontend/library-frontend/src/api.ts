import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5288/api", // backend API
});
