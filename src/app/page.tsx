"use client";

import Image from "next/image";
import Sidebar from "@/layouts/Sidebar";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "@/api";
import { any } from "prop-types";
import { IUser } from "@/models/IUser";
import { authWithToken } from "@/api2";
import { useRouter } from "next/navigation";
import { authContext } from "@/contexts/authContext";
import { useQuery2 } from "@/hooks/useQuery2";

interface Status {
  isLoading: boolean;
  error: string[];
  payload: IUser | null;
}

export default function Home() {
  // const router = useRouter();
  // const { isAuth, setIsAuth } = useContext(authContext);
  // const [status, setStatus] = useState<Status>({
  //   isLoading: false,
  //   error: [],
  //   payload: null,
  // });

  // const onclick = async () => {
  //   setStatus({
  //     isLoading: true,
  //     error: [],
  //     payload: null,
  //   });
  //
  //   const getHeaders = (token: string) => {
  //     return {
  //       ["ngrok-skip-browser-warning"]: true,
  //       Authorization: `Bearer ${token}`,
  //     };
  //   };
  //
  //   let response = await fetch(BASE_URL + "/users/me", {
  //     headers: getHeaders(localStorage.getItem("token")) as any,
  //   });
  //   console.log(response);
  //   let result = await response.json();
  //
  //   console.log(result);
  //
  //   if (response.status === 401) {
  //     console.log(1111);
  //     let response = await fetch(BASE_URL + "/auth/refresh", {
  //       method: "POST",
  //       credentials: "include",
  //     });
  //     let result = await response.json();
  //     localStorage.setItem("token", result.accessToken);
  //     // console.log(localStorage.getItem("token"));
  //
  //     let response2 = await fetch(BASE_URL + "/users/me", {
  //       headers: getHeaders(result.accessToken) as any,
  //     });
  //     console.log(response2);
  //     let result2 = await response2.json();
  //     setStatus({ isLoading: false, error: [], payload: result2 });
  //     return;
  //   }
  //
  //   setStatus({
  //     isLoading: false,
  //     error: [],
  //     payload: result,
  //   });
  // };

  // const onclick = async () => {
  //   setStatus({
  //     isLoading: true,
  //     error: [],
  //     payload: null,
  //   });
  //
  //   try {
  //     let response = await authWithToken("/users/me");
  //     let result = await response.json();
  //     setStatus({ isLoading: false, error: [], payload: result });
  //     console.log(result);
  //   } catch (e) {
  //     console.log(e);
  //     setIsAuth(false);
  //     router.replace("/auth");
  //   }
  // };

  const { isLoading, error, payload } = useQuery2("/users/me");
  console.log(payload);

  return (
    <div>
      {payload?.id ? <div>{payload.name}</div> : <div>Home page</div>}
      {/*<button onClick={onclick}>Получить данные</button>*/}
    </div>
  );
}
