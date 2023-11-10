import Image from "next/image";
import style from "./Card.module.css";
import Link from "next/link";
import { skills } from "./data";
export default function Card({ project }) {
  return (
    <div className={style["projectCard"]} key={project.id}>
      <div className={style.split}>
        <div>
          <ul className={style.icons}>
            {project.Technology.map((tech, id) => (
              <li key={id}>
                <Image src={skills[tech]} width={40} height={40} />
              </li>
            ))}
          </ul>
        </div>

        <div className={style.imgTitle}>
          <span className={style.title}>{project.name}</span>
          <div className={style["projectImage"]}>
            <Link
              href={project.LiveServer}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={style.imgBox}>
                <Image
                  src={project.image}
                  priority={false}
                  placeholder="empty"
                  layout="responsive"
                  width={400}
                  height={300}
                  alt={`${project.name}`}
                />
              </div>
            </Link>
          </div>

          <div className={style["projectDetails"]}>
            <div className={style["studio-button"]}>
              <div className={style["studio-button-icon"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span className={style.eye}></span>
              </div>
              <Link
                className={style["studio-button-label"]}
                href={project.LiveServer}
              >
                Source Code
              </Link>
            </div>
            <div className={style["studio-button"]}>
              <div className={style["studio-button-icon"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span className={style.eye}></span>
              </div>
              <Link
                className={style["studio-button-label"]}
                href={project.LiveServer}
              >
                Live
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
