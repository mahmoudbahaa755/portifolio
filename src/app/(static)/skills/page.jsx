import React from 'react';
import Head from 'next/head';
import style from './Skill.module.css';
import Image from 'next/image';

const skills = [
  {
    title: "HTML",
    svg: "./icons/html.png",
  },
  {
    title: "CSS",
    svg: "./icons/css.png",
  },
  {
    title: "JavaScript",
    svg: "./icons/js.png",
  },

  {
    title: "React",
    svg: "./icons/react.svg",
  },

  {
    title: "Next.js",
    svg: "./icons/nextjs.svg",
  },

  {
    title: "Python",
    svg: "./icons/python.svg",
  },
  {
    title: "WordPress",
    svg: "./icons/wordpress.png",
  },

  {
    title: "Firebase",
    svg: "./icons/firebase.svg",
  },
  {
    title: "SQL",
    svg: "./icons/sql.png",
  },
  {
    title: "Bootstrap",
    svg: "./icons/bootstrap.svg",
  },
];
export const metadata = {
  title: "Skills",
  description: "My Skills.",
};

export default function Skill() {
  return (
    <div className={style.container}>
      
      <Head>
        <title>Front-End Developer Skills</title>
      </Head>
      <header className={style.header}>
        <h1>Front-End Developer Skills</h1>
        <p>Enhance your front-end development skills with these technologies:</p>
      </header>
      <div className={style.skills}>
        {skills.map((skill, index) => (
          <div className={style.skill} key={index}>
            <h2>{skill.title}</h2>

            <Image  src={skill.svg} className={style.img} alt={skill.title} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
