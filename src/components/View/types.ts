import {ConnectStyleProps} from 'hoc/connectStyle/types';
import {CSSProperties, MouseEventHandler, UIEventHandler} from 'react';
type Props = {
  id?: any;
  style?: CSSProperties;
  children?: any;
  className?: string;
  reference?: (ref: HTMLDivElement) => any;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onScroll?: UIEventHandler<HTMLDivElement>;
} & ConnectStyleProps;

type States = {};

export type {Props, States};
