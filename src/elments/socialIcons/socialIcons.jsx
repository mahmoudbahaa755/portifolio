import Image from "next/image"
import Link from "next/link"

import style from "./socialIcons.module.css"
export default function SoicalIcons(){
    const w_h=40
    const data=[
      {
        id: 1,
        name:'Whatsapp',
        url:'https://wa.me/+201010623847',
            svg:'/icons/square-whatsapp.svg'
      },
        {
            id: 2,
            name: "Github",
            url: "https://github.com/mahmoudbahaa12",
        svg: "/icons/github.svg"
    }
            ,{
            id: 3,
            name: "Linkedin",
                url: "https://www.linkedin.com/in/mahmud-bahaa",
            svg: "/icons/linkedin.svg",
            
            }
           
    ]

    return (
        <div >
            {data.map((item, index) => (
                <Link key={index} href={item.url}>
                        <Image src={item.svg} width={w_h} height={w_h}></Image>
                    </Link>
            ))}
        </div>
    )
}