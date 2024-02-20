import React, { useContext, useState } from "react";
import style from "./styles.module.scss";
import { authContext } from "@/contexts/authContext";
import { BASE_URL } from "@/api";
import { authWithToken } from "@/api2";

// auth/login POST (body: email, password)
// auth/refresh POST (refreshToken in cookie)
// users/me GET (accessToken in headers)

// test user:
//     email: test@test.ru
// password: qwerty

const AuthForm = () => {
  const [status, setStatus] = useState({
    isLoading: false,
    error: [],
  });

  const { isAuth, setIsAuth } = useContext(authContext);

  // const submit = async (e: any) => {
  //   e.preventDefault();
  //   let login = e.target.elements.login.value;
  //   let password = e.target.elements.password.value;
  //
  //   try {
  //     setStatus({ isLoading: true, error: [] });
  //     let response = await fetch(BASE_URL + "/auth/login", {
  //       method: "POST",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //       },
  //       body: JSON.stringify({ email: login, password: password }),
  //       // credentials: "include",
  //     });
  //     let result = await response.json();
  //
  //     localStorage.setItem("token", result.accessToken);
  //
  //     if (!result.accessToken) {
  //       setStatus({ isLoading: false, error: result.message });
  //     } else {
  //       setIsAuth(true);
  //       setStatus({ isLoading: false, error: [] });
  //     }
  //     console.log("result", result);
  //   } catch (e: any) {
  //     setStatus({ isLoading: false, error: e.message });
  //     console.log("Error", e);
  //   }
  //
  //   // console.log("login", e.target.elements.login.value);
  //   // console.log("password", e.target.elements.password.value);
  // };

  const submit = async (e: any) => {
    e.preventDefault();
    let login = e.target.elements.login.value;
    let password = e.target.elements.password.value;

    try {
      setStatus({ isLoading: true, error: [] });
      const response = await authWithToken("/auth/login", "POST", {
        email: login,
        password: password,
      });
      let result = await response.json();

      localStorage.setItem("token", result.accessToken);

      if (!result.accessToken) {
        setStatus({ isLoading: false, error: result.message });
      } else {
        setIsAuth(true);
        setStatus({ isLoading: false, error: [] });
      }
      console.log("result", result);
    } catch (e: any) {
      setIsAuth(false);
      setStatus({ isLoading: false, error: e.message });
      console.log("Error", e);
    }
  };

  return (
    <div className={style.auth}>
      <h2>Авторизация</h2>
      {status.error && <h2>{status.error}</h2>}

      <form onSubmit={submit} className={style.form}>
        <span>login</span>
        <input name={"login"} style={{ color: "black" }} />
        <span>password</span>
        <input name={"password"} style={{ color: "black" }} type={"password"} />
        <button type={"submit"}>Войти</button>
      </form>
    </div>
  );
};

export default AuthForm;
