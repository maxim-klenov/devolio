import ArrowDownIcon from "./icons/ArrowDownIcon";
import ArrowSideIcon from './icons/ArrowSideIcon';
import ProjectIcon from './icons/ProjectIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon'
import GithubIcon from './icons/GithubIcon'


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
  'arrow-down': ArrowDownIcon,
  'arrow-side': ArrowSideIcon,
  'project': ProjectIcon,
  'external-link': ExternalLinkIcon,
  'github': GithubIcon
}

const Icon = ({ name, color = "black", width = 50, height = 50, ariaLabel, ariaHidden, ...props }) => {
  if (ariaLabel == null) ariaHidden = true;

  const IconComponent = icons[name];
  if (!IconComponent) console.error("No icon with such 'name' to render");

  return <IconComponent color={color} width={width} height={height} aria-hidden={ariaHidden} aria-label={ariaLabel} {...props} />;
}
 
export default Icon;