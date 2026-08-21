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

          <sup className={clsx(styles["text-styles"], styles.sup)}>PREAX</sup>
          <span className={clsx(styles["text-styles"], styles.span)}>Стажер frontend (React)</span>
          <sub className={clsx(styles["text-styles"], styles.sub)}>Март 2025 - 1 год и 2 месяца</sub>

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


        <Icon className={styles["arrow-down"]} name="arrow-down-exp" width={150} height={150}/>

       <div className={styles.group}>
          <div className={styles["buttons-group"]}>

            <div className={styles["button-group"]}>
              <a className={styles.btn} href="https://example.org" target="_blank" rel="noopener noreferrer">Github проекта</a>
              <Icon className={styles["icon-background"]}  name="github" width={250} height={250} />
            </div>
            
            <div className={styles["button-group"]}>
              <a className={styles.btn} href="https://example.org" target="_blank" rel="noopener noreferrer">Исследование</a>
              <Icon className={styles["icon-background"]}  name="stack" width={250} height={250} />
            </div>
          </div>
          <p className={styles.para}>После я переключился на идивидуальный проект в 10 классе. Кроме выполненного исследования об искусственном интеллекте, я написал скипт, который получал ответы опроса и отправлял их в базу данных.</p>
      </div>

       <div className={styles.group}>
        <p className={clsx(styles.para, styles.center)}>В 11 классе, параллельно с подготовкой к ЕГЭ, я проходил олимпиады, хакатоны и курсы по информатике, физике, математике и английскому языку. <a href="https://example.org" target="_blank" rel="noopener noreferrer">См. награды -&gt;</a></p>
      </div>
    </section>
   );
}
 
export default Experience;