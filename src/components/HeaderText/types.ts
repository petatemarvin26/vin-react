import {ClassNames} from 'hoc/connectStyle/types';
import {CSSProperties} from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  children?: any;
  classNames?: ClassNames;
};

type States = {};

export type {Props, States};
