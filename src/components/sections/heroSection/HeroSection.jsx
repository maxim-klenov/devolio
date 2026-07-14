// import ScrollContainer from "@/components/ui/scrollContainer/ScrollContainer";
import Icon from "@/components/icon/Icon";

import styles from "./heroSection.module.css";
import heroVid from "@/assets/images/hero.webm";
import Button from "@/components/button/Button";

const HeroSection = () => {


  return ( 
    <>
      <section aria-labelledby="heading-intro"> 
        <div className={styles.intro}>

          <div className={styles["intro-text"]}>
            <hgroup>
              <sup className={styles.suptext}>Привет, привет!</sup>
              <h1 className={styles.heading} id="heading-intro">Это - кратенькое <span>портфолио</span> <br/> Jamstack-разработчика</h1>
            </hgroup>

            <div className={styles["buttons-group"]}>
              <Button iconName="arrow-side" >Связаться</Button>
              <Button iconName="project" variant="inline">Перейти к проектам</Button>
            </div>
          </div>

          <video className={styles.hero} muted autoPlay loop playsInline width="400" height="400">
            <source src={heroVid} type="video/mp4" />
          </video>
            
        </div>
        
        <Icon className={styles["arrow-down"]} name="arrow-down" width={100} height={100}/>
      </section>
    {/* <ScrollContainer /> */}
    </>
   );
}
 
export default HeroSection;