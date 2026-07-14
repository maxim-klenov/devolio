import Icon from '@/components/icon/Icon'
import styles from "./button.module.css";
import clsx from 'clsx';

const Button = ({ iconName, variant = "filled", children, ariaLabel = children, ...props }) => {

  const hasIconName = !!iconName;
  const hasInnerText = !!children;
  if (!hasIconName && !hasInnerText) throw new Error("text or icon (iconName) needed for this component");
  
  const resolvedVariant = variant === "filled" ? "filled" : "inline";

  const classes = clsx(
    styles.button, 
    hasIconName && hasInnerText && styles['button--flexbox'],
    resolvedVariant === "filled" && styles["btn--filled"],
    resolvedVariant === "inline" && styles["btn--inline"]
  );

  return (
    <button className={classes} aria-label={ariaLabel} {...props} >
      { hasIconName ? <Icon name={iconName} width={20} height={20} ariaHidden /> : '' } 
      { children }
    </button>
  );
}

export default Button;

// `${styles.button} ${(hasIconName && hasInnerText) ? styles['button--flexbox'] : ''}`