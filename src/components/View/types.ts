import {ClassNames} from 'hoc/connectStyle/types';
import {CSSProperties, MouseEventHandler, UIEventHandler} from 'react';
type Props = {
  id?: any;
  style?: CSSProperties;
  children?: any;
  className?: string;
  classNames?: ClassNames;
  reference?: (ref: HTMLDivElement) => any;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onScroll?: UIEventHandler<HTMLDivElement>;
};

type States = {};

export type {Props, States};
