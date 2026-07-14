// import { useState } from "react";
// import NavMenuButton from "@/components/ui/navMenuButton/NavMenuButton";
import styles from "./header.module.css";
// import HamburgerIcon from "@/components/ui/hamburgerIcon/HamburgerIcon";

const Header = () => {

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return ( 
    <header className={styles.header}>

        {/* <NavMenuButton className={styles["menu-button"]} isActive={isMenuOpen} onClick={() => {setIsMenuOpen(!isMenuOpen)}}> */}
          <nav>
            <span>Главная</span>
          </nav>
          <ul className={styles.list}>
            <li><a href="#">Опыт и достижения</a></li>
            <li><a href="#">Спонсировать новый проект</a></li>
          </ul>
          {/* <HamburgerIcon isActive={isMenuOpen} /> */}
        {/* </NavMenuButton> */}

        {/* <a href="mailto:maxklenow@gmail.com" className={styles["mail"]}>maxklenow@gmail.com</a> */}
    </header>
   );
}
 
export default Header;