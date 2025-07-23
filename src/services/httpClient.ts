import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.AWS_API_URL,
});
