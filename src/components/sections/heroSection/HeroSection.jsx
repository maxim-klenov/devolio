// import ScrollContainer from "@/components/ui/scrollContainer/ScrollContainer";
import styles from "./heroSection.module.css";

const HeroSection = () => {
  return ( 
    <>
    <div className={styles.intro}> 
      <h1 className={styles.heading}>Building Interfaces for <span>Humans,</span> not just <span>screens.</span></h1>
      {/* Interfaces */}
      <div className={styles.subtext}>   
        <p>I’m Maxim, a frontend developer specializing in building responsive, high-performance web applications with React and TypeScript. My focus is on clean, maintainable code and exceptional user experiences—evidenced by consistent Lighthouse Performance scores of 97+......</p>
        <p>For me, frontend development isn’t just about writing code — it’s about solving real problems with empathy, precision, and a relentless commitment to quality.</p>
      </div>
    </div>
    {/* <ScrollContainer /> */}
    </>
   );
}
 
export default HeroSection;