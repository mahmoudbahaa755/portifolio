"use client";
import { navInfo } from "./data.js";
import { useState } from "react";
import style from "./NavBarsmall.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Navbarsmall() {
  const [activeDiv, setActiveDiv] = useState("");
  const [buttonType, setButtonType] = useState("X");
  const [isSmallScreen, setSmallScreen] = useState(false);

  const toggleNavbar = () => {
    setSmallScreen(!isSmallScreen)
  }
  const closeNavbar = () => {
    console.log('work')
    setSmallScreen(true);
  }
const handleButton = () => {
    if (buttonType === '☰') {
      setButtonType('X')
    }
    else{
      setButtonType('☰')

    }
  };

  return (
    <div>
     <div onClick={() => { toggleNavbar(); handleButton(); }} className={style.menu}>
  {buttonType}
</div>
      <div className={style.container}>
        <div
         onClick={() => closeNavbar()}
          className={`${style.navbar}`}
          style={{ display: isSmallScreen ? "none" : "flex" }}
        >
          <div className={style.navbarlinks}>
            {navInfo.map((item) => (
              <Link
                href={item.url}
                className={`${style.navbarlink} ${
                  item.id === activeDiv ? style.active : ""
                }`}
                onClick={() => closeNavbar()}
                key={item.id}
              >
                <div className={style.icon}>
                <Image
                  src={item.svg}
                  className={style.img}
                  alt={item.name}
                  width={66}
                  height={66}
                />

                  </div>
                <div className={style.name}>{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
