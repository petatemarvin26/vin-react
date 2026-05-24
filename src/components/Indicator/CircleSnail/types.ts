export type Props = {
  size: number;
  thickness: number;
  className?: string;
  classNameBg?: string;
  classNameAnc?: string;
  /**
   * Default is `square`
   * @default `square`
   */
  cornerStyle?: 'round' | 'square';
  /**
   * Percentage of circle
   */
  progress?: number;
  animating?: boolean;
  color?: string;
  /**
   * Speed per second
   * @default `1s`
   */
  speed?: number;
} & React.SVGAttributes<HTMLOrSVGElement>;
