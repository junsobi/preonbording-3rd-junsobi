import axios from "axios";

const api = axios.create({
  baseURL: "https://sick-api-junsobi.vercel.app",
});

export const getSickList = async (query: string) => {
  try {
    console.info("calling api");
    const response = await api.get(`/sick?name_like=${query}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
  }
};
