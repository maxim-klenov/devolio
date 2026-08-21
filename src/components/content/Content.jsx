import HeroSection from "@/components/sections/heroSection/HeroSection";
import styles from "./content.module.css";
import Projects from "@/components/sections/projects/Projects";
import { projects } from "@/assets/data/projects";
import Experience from "../sections/experience/Experience";
import Results from "../sections/results/Results";


const Content = () => {

  return (
    <main className={styles.container}>
      <HeroSection />
      <Projects projects={projects} />
      <Experience />
      <Results />
    </main>
  );
}

export default Content