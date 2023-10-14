'use client'
import { navInfo } from "./data.js"
import { useState } from "react"
import style from "./Navbar.module.css"
import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    const [activeDiv, setActiveDiv] = useState("");

    const handleClick = (divId) => {
        setActiveDiv(divId);
    };

    return (
        <div className={style.container}>
            <div className={style.navbar}>
                <div className={style.navbarlinks}>
                    {navInfo.map((item) => (
                        <div
                            className={`${style.navbarlink} ${item.id === activeDiv ? style.active : ""
                                }`}
                            onClick={() => handleClick(item.id)}
                        >
                            <Link href={item.url} key={item.id}>
                                <Image src={item.svg} className={style.img} alt={item.name} width={66} height={66} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}