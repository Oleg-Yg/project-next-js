import $api from "@/api";
import { AxiosResponse } from "axios";
import { AuthResponse } from "@/models/response/AuthResponse";

export default class AuthServices {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/login", { email, password });
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/registration", { email, password });
  }

  static async logout(): Promise<any> {
    return $api.post("/logout");
  }
}
