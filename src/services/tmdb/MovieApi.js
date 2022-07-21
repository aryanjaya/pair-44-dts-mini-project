import { AxiosError } from "axios";
import client from "./client";

const MovieApi = {
  async getNowPlaying(options = {}){
    let data = null;
    let errors = null;
    let statusCode = null;

    try {
      const response = await client.get("/movie/now_playing", {
        params: options,
      });

      data = response.data;
      statusCode = response.status;
    } catch (error) {
      if (error instanceof AxiosError) {
        errors = error.response.data;
        statusCode = error.response.status;
      } else {
        errors = error;
      }
    }

    return {
      data,
      errors,
      statusCode,
    };
  },
  async getDetailMovie(id){
    let data = null;
    let errors = null;
    let statusCode = null;

    try {
      const response = await client.get("/movie/" + id);

      data = response.data;
      statusCode = response.status;
    } catch (error) {
      if (error instanceof AxiosError) {
        errors = error.response.data;
        statusCode = error.response.status;
      } else {
        errors = error;
      }
    }

    return {
      data,
      errors,
      statusCode,
    };
  },
};

export default MovieApi;
