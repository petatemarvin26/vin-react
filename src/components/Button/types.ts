import {CSSProperties} from 'react';

type Props = {
  style?: CSSProperties;
  className?: string;
  children?: any;
  title?: string;
  onClick?: () => void;
};

type States = {};

export type {Props, States};
