// import ScrollContainer from "@/components/ui/scrollContainer/ScrollContainer";
import Icon from "@/components/icon/Icon";

import styles from "./heroSection.module.css";
import heroWebp from '@/assets/images/hero-image.webp';
import heroJpg from '@/assets/images/hero-image.jpg';

const HeroSection = () => {
  return ( 
    <>
      <section aria-labelledby="heading-intro"> 
        <div className={styles.intro}>
          <hgroup>
            <sup className={styles.suptext}>Привет, привет!</sup>
            <h1 className={styles.heading} id="heading-intro">Это - кратенькое <span>портфолио</span> <br/> Jamstack-разработчика</h1>
          </hgroup>

          <picture className={styles.hero}>
            <source srcSet={heroWebp}></source>
            <img src={heroJpg} alt="улыбающийся мальчик сидит за компьютером и машет рукой" width={388} height={388}/>
          </picture>
        </div>
        
        <Icon className={styles["arrow-down"]} name="arrow-down" width={100} height={100}/>
      </section>
    {/* <ScrollContainer /> */}
    </>
   );
}
 
export default HeroSection;