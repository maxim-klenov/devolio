/**
 import clsx from "clsx";
import styles from "./projects.module.css";


interface Project {
  id: number;
  imageSrc: string;
  name: string;
  stack: string[];
  description: string;
  caseLink: string;

}

interface ProjectsProps {
  projects: Project[];
}

 
const Projects = ({ projects }) => {
  return ( 
    <div className={styles.projects}>
      
      {projects.map((project) => (
       <div className={styles.project} key={project.id}>
          <img className={styles.preview} src={`/src/assets/images/${project.imageSrc}`} alt={project.name} />
          <div>
            <h3 className={clsx(styles.heading, "heading-3")}>{project.name}</h3>
            <span className={styles.stack}>
              {project.stack.join(" | ")}
            </span>
            <p>{project.description}</p>
            <a href={project.caseLink}>View case study</a>
          </div>
        </div> 
      ))}

    </div>
   );
}
 
export default Projects;

*/