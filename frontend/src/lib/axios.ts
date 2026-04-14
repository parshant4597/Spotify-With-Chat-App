import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://spotify-with-chat-app-production.up.railway.app/api",
});