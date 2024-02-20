import { BASE_URL } from "@/api";

const headers = {
  ["ngrok-skip-browser-warning"]: true,
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json;charset=utf-8",
};

const getHeaders = (token: string) => {
  return {
    ["ngrok-skip-browser-warning"]: true,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json;charset=utf-8",
  };
};

const authRefresh = async () => {
  let response = await fetch(BASE_URL + "/auth/refresh", {
    method: "POST",
    credentials: "include",
  });
  let result = await response.json();
  localStorage.setItem("token", result.accessToken);
  return response;
};

export const authWithToken = async (
  url: string,
  method: "GET" | "POST" = "GET",
  body?: any,
  isRetry?: boolean
) => {
  let response = await fetch(BASE_URL + url, {
    method: method,
    credentials: "include",
    headers: getHeaders(localStorage.getItem("token")) as any,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 401 && !isRetry) {
    const responseRefresh = await authRefresh();
    if (responseRefresh.status === 401) {
      throw new Error("Ошибка 401");
    } else {
      return await authWithToken(url, method, body, true);
    }
  }
  return response;
};

// export const authWithToken = () => {
//
// }

// let response = await fetch(BASE_URL + "/auth/login", {
//     method: "POST",
//     credentials: "include",
//     headers: {
//         "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify({ email: login, password: password }),
//     // credentials: "include",
// });
// let result = await response.json();
