import React from "react";
import Sidebar from "@/layouts/Sidebar";
import styles from "./styles.module.scss";
import AuthContext from "@/contexts/authContext";

const MainLayout = ({ children }) => {
  return (
    <main className={styles.mainLayout}>
      <AuthContext>
        <Sidebar />
        <section>{children}</section>
      </AuthContext>
    </main>
  );
};

export default MainLayout;
