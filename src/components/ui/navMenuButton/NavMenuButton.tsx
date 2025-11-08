import { type FC, type ReactNode } from 'react';
import { clsx } from "clsx";
import styles from "./navMenuButton.module.css";

interface NavMenuButtonProps {
  className: string;
  onClick: () => void;
  isActive?: boolean;
  children: ReactNode
}
 
const NavMenuButton: FC<NavMenuButtonProps> = ( {className, onClick, isActive = false, children} ) => {
  return ( 
      <button 
        className={clsx(className, styles.button , { [styles.active]: isActive})} 
        onClick={onClick}
      >
        {children}
      </button>
   );
}
 
export default NavMenuButton;