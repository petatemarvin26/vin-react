import {CSSProperties} from 'react';

type AnchorStyle = 'inherit' | 'butt' | 'round' | 'square' | undefined;

interface Props {
  style?: CSSProperties;
  anchorStyle?: AnchorStyle;
  progress?: number;
  color?: string;
  size?: any;
  thickness?: string;
  type?: string;
}
interface State {
  PI: number;
  SIZE: string;
  RADIUS: string;
  POS: string;
  CIRCUMFERENCE: string;
}

export type {AnchorStyle, Props, State};
