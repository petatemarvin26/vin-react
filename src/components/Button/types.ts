import {CSSProperties, MouseEventHandler} from 'react';
import {ConnectStyleProps} from '@/hoc/types';

type Props = {
  style?: CSSProperties;
  className?: string;
  children?: any;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  ConnectStyleProps;

type States = {};

export type {Props, States};
