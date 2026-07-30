import HeroSection from "@/components/sections/heroSection/HeroSection";
import styles from "./content.module.css";
import Projects from "@/components/sections/projects/Projects";
import { projects } from "@/assets/data/projects";
import Experience from "../sections/experience/Experience";


const Content = () => {

  return (
    <main className={styles.container}>
      <HeroSection />
      <Projects projects={projects} />
      <Experience />
    </main>
  );
}

export default Content