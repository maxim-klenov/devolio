/*
import { type FC } from 'react'

interface ArrowProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  width?: number;
  height?: number;
  ariaHidden?: boolean;
  ariaLabel?: string;
} 
*/

const ArrowDown = ({ color, width, height, ariaHidden, ariaLabel, ...props }) => {
  return ( 
    <svg
      width={width}
      height={height}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      fill="none"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      >
        <path d="M55.26 8.38C64.07 20.42 68.3 30.46 64.98 38.18C60.66 48.21 48.53 43.97 44.17 52.85C42.18 56.91 41.81 66.24 50.17 86.63" fill="white"/>
        <path d="M55.26 8.38C64.07 20.42 68.3 30.46 64.98 38.18C60.66 48.21 48.53 43.97 44.17 52.85C42.18 56.91 41.81 66.24 50.17 86.63" stroke="black" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M50.05 86.5L31.1 74.43" stroke={color} strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M62.18 67.59L50.11 86.54" stroke={color} strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
   );
}
 
export default ArrowDown;