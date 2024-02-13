import React from "react";
import Head from "next/head";
import style from "./Skill.module.css";
import Image from "next/image";
import { skills } from "./data";

export const metadata = {
  title: "Skills",
  description: "My Skills.",
};

export default function Skill() {
  return (
    <div className={style.container}>
      <Head>
        <title>My Software Skills</title>
      </Head>
      <header className={style.header}>
        <h1>Front-End Developer Skills</h1>
        <p>
          Enhance your front-end development skills with these technologies:
        </p>
      </header>
      <div className={style.skills}>
        {skills.map((skill, index) => (
          <div className={style.skill} key={index}>
            <h2>{skill.title}</h2>

            <Image
              src={skill.svg}
              className={style.img}
              alt={skill.title}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
