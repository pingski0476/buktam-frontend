import axios from "axios";

const Buktam = axios.create({
  baseURL: "http://localhost:8000/",
});

export default Buktam;
