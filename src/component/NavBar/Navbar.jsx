"use client";
import { navInfo } from "./data.js";
import { useState } from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/Context/AppContext";
export default function Navbar() {
  const [activeDiv, setActiveDiv] = useState("");
  const { setHoveredIcon } = useAppContext();
  const handleClick = (divId) => {
    setActiveDiv(divId);
  };

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.navbarlinks}>
          {navInfo.map((item) => (
            <Link
              onMouseEnter={() => setHoveredIcon(item.name)}
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
              <div className={style.name}>{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
