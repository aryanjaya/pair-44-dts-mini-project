import axios from "axios";
import config from "./config";

const client = axios.create({
  baseURL: config.base_uri,
});

client.defaults.params = {
  api_key: config.api_key,
  language: config.language,
};

client.defaults.timeout = config.timeout;

export default client;
