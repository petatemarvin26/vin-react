import {CSSProperties, MouseEventHandler} from 'react';
import {ClassNames} from 'hoc/connectStyle/types';

type Props = {
  style?: CSSProperties;
  className?: string;
  children?: any;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classNames?: ClassNames;
};

type States = {};

export type {Props, States};
