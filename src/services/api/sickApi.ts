import axios from "axios";

const api = axios.create({
  baseURL: "https://sick-api-junsobi.vercel.app",
});

let cache: { [key: string]: any } = {};
let cacheExpiration: { [key: string]: number } = {};

export const getSickList = async (query: string) => {
  try {
    if (cache[query] && !isCacheExpired(query)) {
      console.info("캐싱으로 반환된 결과값");
      return cache[query];
    }

    const response = await api.get(`/sick?q=${query}`);
    console.info("calling api");
    cache[query] = response.data;

    const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;
    cacheExpiration[query] = Date.now() + FIVE_MINUTES_IN_MS;

    return response.data;
  } catch (error: any) {
    console.error(error);
  }
};

const isCacheExpired = (query: string) => {
  return Date.now() > cacheExpiration[query];
};
