import Stickman from "@/elments/StickMan/StickMan";
import style from "./page.module.css";

import PersonalInfo from "./PersonalInfo";
import Services from "@/component/Services/Services";

export const metadata = {
  title: "About",
  Technology: "some information about me",
};

export default function About() {
  return (
    <div className={style["about-me"]}>
      <p className="purple">My Intro</p>
      <h1>
        About <span className="purple">Me</span>
      </h1>
      <h2>
        Who Am <span className="purple"> I ?</span>
      </h2>
      <p>
        I am Mahmoud Bahaa Graduated from Computer Science,and I am working as a{" "}
        <span className="purple">Frontend Developer</span> and
        <span className="purple">
          {" "}
          studying AI and Data Science in DEBI scholarship
        </span>{" "}
        and I'm always eager to collaborate on exciting projects.
      </p>
      <div className={style.stickman}>
        <div className={style.wrongHire}>
          <h2>
            Don't Ever Hire the <span className="red">Wrong Person </span>
          </h2>
          <Stickman />
        </div>
        <div></div>
      </div>
      <Services />

      <PersonalInfo />
    </div>
  );
}
