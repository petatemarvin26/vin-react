import {CSSProperties} from 'react';

import {ConnectStyleProps} from 'hoc/connectStyle/types';

type Props = {
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
} & ConnectStyleProps;

type State = {};

export type {Props, State};
