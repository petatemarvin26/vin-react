import {CSSProperties, MouseEventHandler} from 'react';

type Props = {
  style?: CSSProperties;
  className?: string;
  children?: any;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

type States = {};

export type {Props, States};
