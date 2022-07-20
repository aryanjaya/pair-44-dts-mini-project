import config from "./config";
import MovieApi from "./MovieApi";

const TmdbApi = {
  MovieApi,
  getImage(path, size = "original") {
    return config.images_uri + size + path;
  },
};

export default TmdbApi;
