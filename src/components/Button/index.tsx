"use client";

import React from "react";
import { ButtonProps } from "@/components/Button/types";
import style from "./styles.module.scss";
import clsx from "clsx";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  margin,
  variant = "text",
}) => {
  return (
    <button
      className={clsx(
        style["button"],
        variant === "outlined" && style["outlined"],
        variant === "contained" && style["contained"]
      )}
      style={{ margin: margin }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
