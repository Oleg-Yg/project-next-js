import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  margin?: string;
  variant?: "outlined" | "contained" | "text";
}
