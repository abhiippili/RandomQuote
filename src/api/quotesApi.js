import axios from "axios";

const quotesApi = axios.create({
  baseURL: "https://api.quotable.io/random"
});

export const getRandomQuote = async () => {
  const response = await quotesApi.get("/");
  return response.data;
};
