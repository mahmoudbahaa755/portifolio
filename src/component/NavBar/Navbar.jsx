"use client";
import { navInfo } from "../NavBarsmall/data.js";
import { useState } from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const [activeDiv, setActiveDiv] = useState("");
  
  const handleClick = (divId) => {
    setActiveDiv(divId);
  };

  return (
    <div>
  
      <div className={style.container}>
        <div
         
          className={`${style.navbar}`}
       
        >
          <div className={style.navbarlinks}>
            {navInfo.map((item) => (
              <Link
                // onMouseEnter={() => closeNavbar()}
                href={item.url}
                className={`${style.navbarlink} ${
                  item.id === activeDiv ? style.active : ""
                }`}
                onClick={() => handleClick(item.id)}
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
          {/* <div className={`${style.name} `}>{item.name}</div> */}
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
