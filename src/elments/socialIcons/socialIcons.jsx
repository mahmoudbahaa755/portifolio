import Image from "next/image"
import Link from "next/link"

import style from "./socialIcons.module.css"
export default function SoicalIcons(){
    const w_h=40
    const data = [
      {
        id: 1,
        name: "Whatsapp",
        url: "https://wa.me/+201010623847",
        svg: "/icons/whatsapp.png",
      },
      {
        id: 2,
        name: "Github",
        url: "https://github.com/mahmoudbahaa755",
        svg: "/icons/github.png",
      },
      {
        id: 3,
        name: "Linkedin",
        url: "https://www.linkedin.com/in/mahmud-bahaa",
        svg: "/icons/linkedin.png",
      },
      {
        id: 4,
        name: "LeetCode",
        url: "https://leetcode.com/mahmoudbahaa755/",
        svg: "/icons/leetcode.png",
      },
    ];

    return (
        <div className={style.socialIcons}>
            {data.map((item, index) => (
                <Link key={index}  href={item.url}>
                        <Image src={item.svg} alt={item.name} className={style.icon} width={w_h} height={w_h}></Image>
                    </Link>
            ))}
        </div>
    )
}