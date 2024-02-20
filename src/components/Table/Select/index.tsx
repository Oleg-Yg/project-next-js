import React from "react";
import { SelectProps } from "@/components/Table/Select/types";
import style from "./styles.module.scss";

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  return (
    <select
      className={style.dropdown}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.title} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
