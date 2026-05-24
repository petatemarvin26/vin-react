export type Props = {
  width: number;
  height: number;
  animating?: boolean;
  /**
   * Default is `square`
   * @default `square`
   */
  cornerStyle?: 'round' | 'square';
  /**
   * Percentage of bar, 100 is equivalent of 1
   */
  progress?: number;
  /**
   * Speed per second
   * @default `1s`
   */
  speed?: number;
  color?: string;
} & React.SVGAttributes<HTMLOrSVGElement>;
