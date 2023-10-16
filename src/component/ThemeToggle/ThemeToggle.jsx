"use client";
import { useContext } from "react";

import style from "./ThemeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
export default function ThemeToggle() {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <div className={style.container} onClick={toggle}>
      <div className={style.icon}>🌙</div>
      <div className={style.icon}>🔆</div>
      <div
        className={style.switch}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
