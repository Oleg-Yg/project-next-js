"use client";

import React, { useState } from "react";

export const authContext = React.createContext({
  isAuth: false,
  setIsAuth: () => {},
} as {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
});

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <authContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
