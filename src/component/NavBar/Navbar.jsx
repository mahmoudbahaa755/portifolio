"use client";
import { navInfo } from "./data.js";
import { useState } from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const [activeDiv, setActiveDiv] = useState("");

  const [isSmallScreen, setSmallScreen] = useState(false);
  const toggleNavbar = (e) => {
    setSmallScreen(!isSmallScreen)
  }

  const handleClick = (divId) => {
    setActiveDiv(divId);
  };

  return (
    <div>
     
      {/* <button onClick={toggleNavbar} className={style.menu}>
  ☰
</button> */}
      <div className={style.container}>
        <div
          className={`${style.navbar}`}
           style={{ display: isSmallScreen ? "none" : "flex" }}
        >
          <div className={style.navbarlinks}>
            {navInfo.map((item) => (
              <Link
                // onMouseEnter={() => setHoveredIcon(item.name)}
                href={item.url}
                className={`${style.navbarlink} ${
                  item.id === activeDiv ? style.active : ""
                }`}
                onClick={() => handleClick(item.id)}
                key={item.id}
              >
                <Image
                  src={item.svg}
                  className={style.img}
                  alt={item.name}
                  width={66}
                  height={66}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
