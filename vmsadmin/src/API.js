// utils/API.js

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5016",
  // baseURL: "http://apitgk3t.iassureit.com/",
  responseType: "json"
  

});
