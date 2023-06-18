import {MouseEvent, CSSProperties} from 'react';
type Props = {
  viewRef?: any;
  style?: CSSProperties;
  children?: any;
  className?: string;
  id?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

type States = {};

export type {Props, States};
