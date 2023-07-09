import {CSSProperties, MouseEventHandler, UIEventHandler} from 'react';
type Props = {
  reference?: (ref: HTMLDivElement) => any;
  style?: CSSProperties;
  children?: any;
  className?: string;
  id?: any;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onScroll?: UIEventHandler<HTMLDivElement>;
};

type States = {};

export type {Props, States};
