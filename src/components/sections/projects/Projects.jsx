import clsx from "clsx";
import styles from "./projects.module.css";
import Icon from "@/components/icon/Icon";
import Button from "@/components/button/Button";

/**

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

*/
 
const Projects = ({ projects }) => {
  const top3projects = projects.slice(0, 3);

  return ( 
    <section id="projects-section" className={clsx("section", styles.projects)}>
      <h2 className="heading-2">Проекты</h2>

      <div className={styles["projects__container"]}>
        {top3projects.map((project) => (
        <div className={styles.project} key={project.id}>

          <picture className={styles["project__preview"]}>
            <source srcSet={`/src/assets/images/projects/${project.imageSrc}.webp`} type="image/webp" />
            <img src={`/src/assets/images/projects/${project.imageSrc}.jpg`} alt={project.name} height="200" />
          </picture>

          <div className={styles["project__inner"]}>
            <span className={styles["project__inner-heading"]}>
              <h3 className={clsx(styles.heading, "heading-3")}>{project.name}</h3>
              <span className={styles["icons-group"]}>
                {project.preview !== undefined &&
                  <a href={project.preview}><Icon className={styles.icon} name="external-link" width={20} height={20}/></a>
                }
                <a href={project.github}><Icon className={styles.icon} name="github" width={20} height={20}/></a>
              </span>
            </span>

            <p className={styles["project__inner-description"]}>{project.description}</p>

            <div className={styles["project__inner-stack"]}>
              {project.stack.map((item) => (
                <span key={item} className={styles["stack-chip"]}>
                  {item}
                </span>
              ))}
            </div>

            {/* <a href={project.caseLink}>View case study</a> idk if needed*/}
          </div>

          </div> 
        ))}
      </div>
    
    <Button className={styles['button-watch-more']} iconName="arrow-side">Смотреть все</Button>
    </section>
   );
}
 
export default Projects;