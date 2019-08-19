// utils/API.js

import axios from "axios";

export default axios.create({
  baseURL: "http://apitgk3t.iassureit.com/",
  responseType: "json"
  

});
