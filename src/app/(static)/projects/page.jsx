import Card from "./Card";
import { projects } from "./data";
import style from "./page.module.css";
export const metadata = {
  title: "Projects",
  Technology: "projects I have worked on.",
};

export default function Projects() {


  return (
    <div className={style.container}>
      <div className="flex-mid">
        <h1>
          My <span className="purple">Portfolio</span>
        </h1>
        <small className="small">Showcasing Some Of My Work</small>
      </div>
      <div className={style["project-list"]}>
        {projects.map((project,index) => (
          <Card key={index} project={project} />
        
        ))}
      </div>
    </div>
  );
}
