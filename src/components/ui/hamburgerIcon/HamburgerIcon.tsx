import type { FC } from "react";
import clsx from "clsx";
import styles from "./hamburgerIcon.module.css";

interface HamburgerIconProps {
  isActive?: boolean;
  className?: string; 
  
}
 
const HamburgerIcon: FC<HamburgerIconProps> = ({ isActive = false, className }) => {
  return ( 
    <div className={clsx(styles.hamburger, className, { [styles.active]: isActive })}>
      <div></div>
    </div>
   );
}
 
export default HamburgerIcon;