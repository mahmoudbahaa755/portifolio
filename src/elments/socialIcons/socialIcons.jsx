import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import style from "./socialIcons.module.css";
export default function SoicalIcons() {
  const w_h = 40;
  const iconStyle = {
    fill: "white",
    width: `${w_h}px`,
    height: `${w_h}px`,
    ".:hover": "fill: var(--main-color)",
  };
  const data = [
    {
      id: 1,
      name: "Whatsapp",
      url: "https://wa.me/+201010623847",
      icon: <FaWhatsapp style={iconStyle} />,
    },
    {
      id: 2,
      name: "Github",
      url: "https://github.com/mahmoudbahaa755",
      icon: <FaGithub style={iconStyle} />,
    },
    {
      id: 3,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/mahmud-bahaa",
      icon: <FaLinkedin style={iconStyle} />,
    },
    {
      id: 4,
      name: "LeetCode",
      url: "https://leetcode.com/mahmoudbahaa755/",
      icon: <SiLeetcode style={iconStyle} />,
    },
  ];
  return (
    <div className={style.socialIcons}>
      {data.map((item, index) => (
        <Link key={index} href={item.url}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
