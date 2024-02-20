import axios from "axios";
import { AuthResponse } from "@/models/response/AuthResponse";

export const BASE_URL = "https://8e0a-85-159-25-177.ngrok-free.app";

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

//INTERCEPTOR - это Перехватчики - функция, можно перехватывать запросы или ответы до того, как они будут обработаны then или catch.

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(`${BASE_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
    throw error;
  }
);

export default $api;
