import clsx from "clsx";
import styles from "./results.module.css";

const Results = () => {
  return ( 
    <section id="results-section" className={clsx("section", styles.exp)}>
      <h2 className="heading-2">Результаты ЕГЭ</h2>

    </section>
   );
}
 
export default Results;