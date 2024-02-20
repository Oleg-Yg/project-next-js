"use client";

import AuthForm from "@/components/Auth";
import style from "./styles.module.scss";
import React, { useContext } from "react";
import { authContext } from "@/contexts/authContext";
import { BASE_URL } from "@/api";
import cn from "clsx/clsx";
import styles from "@/layouts/Sidebar/styles.module.scss";
import Link from "next/link";

const Auth = () => {
  const { isAuth, setIsAuth } = useContext(authContext);

  /*const onClick = async (e: any) => {
    try {
      // setStatus({ isLoading: true, error: [] });
      let response = await fetch(BASE_URL + "/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      let result = await response.json();

      // localStorage.setItem("token", result.accessToken);
      //
      // if (!result.accessToken) {
      //   setStatus({ isLoading: false, error: result.message });
      // } else {
      //   setIsAuth(true);
      //   setStatus({ isLoading: false, error: [] });
      // }
      console.log("result", result);
    } catch (e: any) {
      // setStatus({ isLoading: false, error: e.message });
      console.log("Error", e);
    }

    // console.log("login", e.target.elements.login.value);
    // console.log("password", e.target.elements.password.value);
  };
*/
  return (
    <div className={style.auth} style={{ padding: "20px" }}>
      {!isAuth ? (
        <AuthForm />
      ) : (
        <div>
          <div>Авторизован</div>
          <Link href={"/"}>Перейти в личный кабинет</Link>
          {/*<button onClick={onClick}>Перейти в личный кабинет</button>*/}
        </div>
      )}
    </div>
  );
};

export default Auth;
