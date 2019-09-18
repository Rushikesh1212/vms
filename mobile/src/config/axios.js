import axios from 'axios';

var instance = axios.create();
instance.defaults.baseURL = 'http://vmsapi.ranjitsinhshinde.in/';
// instance.defaults.baseURL = 'http://192.168.31.204:5014/';
// instance.defaults.timeout = 20000;
//...
//and other options

export default instance;