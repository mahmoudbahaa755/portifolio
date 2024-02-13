import style from "./ContactInfo.module.css";
import SoicalIcons from "@/elments/socialIcons/socialIcons";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
export default function ContactInfo() {
  const w_h = 35;
  const iconStyle = {
    fill: "var( --main-color)",
    width: `${w_h}px`,
    height: `${w_h}px`,
  };
  const info = [
    {
      icon: <FaUser style={iconStyle} />,
      title: "Name",
      mail: "Mahmoud Bahaa",
    },
    {
      title: "Email",
      icon: <FaEnvelope style={iconStyle} />,
      mail: "mahmoudbahaa755@gmail.com",
    },
    {
      icon: <FaPhone style={iconStyle} />,
      title: "Phone",
      mail: "+0201010623847",
    },
    {
      icon: <FaMapMarkerAlt style={iconStyle} />,
      title: "Address",
      mail: "Cairo, Egypt",
    },
  ];
  return (
    <div className={style["contact-info"]}>
      <div className={style["info-title"]}>
        Contact Info
        <p className="small">
          Always available for freelance work if the right project comes along,
          Feel free to contact me!
        </p>
      </div>
      <div className={style["info-details"]}>
        {info.map((item, index) => (
          <div key={index} className={style["info-icon"]}>
            {item.icon}
            <div>
              <p className="purple f-bold">{item.title}</p>
              <p>{item.mail}</p>
            </div>
          </div>
        ))}
        <SoicalIcons />
      </div>
    </div>
  );
}
