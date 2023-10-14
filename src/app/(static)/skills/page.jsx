import React from 'react';
import Head from 'next/head';
import style from './Skill.module.css';

const skills = [
  {
    title: 'HTML',
    description: 'Structure your web content using HTML (HyperText Markup Language).',
  },
  {
    title: 'CSS',
    description: 'Add styles and layouts to your web pages with CSS (Cascading Style Sheets).',
  },
  {
    title: 'JavaScript',
    description: 'Bring interactivity and functionality to your websites using JavaScript.',
  },
  {
    title: 'React',
    description: 'Build user interfaces efficiently with the React library.',
  },
  {
    title: 'Next.js',
    description: 'Create server-rendered React applications with Next.js for improved performance.',
  },
];

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
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
