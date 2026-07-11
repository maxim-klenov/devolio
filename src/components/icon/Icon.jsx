import ArrowDown from "./icons/ArrowDown";

/** 
 interface IconProps {
  name: string;
  color?: string;
  width?: number;
  height?: number;
  ariaLabel?: string;
}

let ariaHidden:boolean = false;

interface BaseIconProps {
  color?: string;
  width?: number;
  height?: number;
  ariaLabel?: string;
  ariaHidden?: boolean;
}

type IconComponentMap = {
  [key: string]: FC<BaseIconProps & React.SVGProps<SVGSVGElement>>
}

*/

// :IconComponentMap
const icons = {
  'arrow-down': ArrowDown
}

const Icon = ({ name, color = "black", width = 10, height = 10, ariaLabel, ariaHidden, ...props }) => {
  if (ariaLabel == null) ariaHidden = true;

  const IconComponent = icons[name];
  if (!IconComponent) console.error("No icon with such 'name' to render");

  return <IconComponent color={color} width={width} height={height} aria-hidden={ariaHidden} aria-label={ariaLabel} {...props} />;
}
 
export default Icon;