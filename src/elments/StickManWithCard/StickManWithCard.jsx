'use client'

import style from "./StickManWithCard.module.css";
import { useAppContext } from "@/Context/AppContext";
export default function StickManWithCard() {
  const { hoveredIcon } = useAppContext();
  return (
    <div className={style.main}>
      <div draggable="true" className={style["stickman"]}>
        <div className={style["rl"]}></div>
        <div className={style["ll"]}></div>
        <div className={style["bdy"]}></div>
        <div className={style["l-eye"]}></div>
        <div className={style["r-eye"]}></div>
        <div className={style["mouth"]}></div>
        <div className={style["la"]}></div>
        <div className={style["ra"]}></div>
        <div className={style.card}>{hoveredIcon}</div>
        <div className={style["h"]}></div>
      </div>
    </div>
  );
}
