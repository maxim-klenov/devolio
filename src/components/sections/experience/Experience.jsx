import clsx from "clsx"; // do you need that 
import styles from "./experience.module.css";

import Icon from "@/components/icon/Icon";
import cardImage from "@/assets/images/work-card.jpg"

const Experience = () => {
  return ( 
    <section id="exp-section" className={clsx("section", styles.exp)}>
      <h2 className="heading-2">Опыт и достижения</h2>

      <div className={styles.group}>
        <p className={styles.para}>
          В веб разработкe я успел, и поучиться, и побыть в команде, и, конечно, набраться опыта. Где-то год я реализовывал себя в компании «преакс плэтформ» в качестве фронтенд-разработчика...
        </p>

        <article className={styles.card}>

          <img src={cardImage} alt="preax лого" width="46" height="46" />

          <sup>PREAX</sup>
          <span>Стажер frontend (React)</span>
          <sub>Март 2025 - 1 год и 2 месяца</sub>

          <ul className={styles["inner-stack"]}>
            <li className={styles["stack-chip"]}>CSS</li>
            <li className={styles["stack-chip"]}>TypeScript</li>
            <li className={styles["stack-chip"]}>JavaScript</li>
            <li className={styles["stack-chip"]}>Git</li>
            <li className={styles["stack-chip"]}>HTML</li>
            <li className={styles["stack-chip"]}>React</li>
          </ul>
        </article>
      </div>


        <Icon className={styles["arrow-down"]} name="arrow-down-exp" width={100} height={100}/>

       <div className={styles.group}>
      </div>

       <div className={styles.group}>
      </div>
    </section>
   );
}
 
export default Experience;