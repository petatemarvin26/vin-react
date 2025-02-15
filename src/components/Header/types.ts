import {ConnectStyleProps} from '@/hoc/types';
import {CSSProperties} from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  children?: any;
} & ConnectStyleProps &
  React.HTMLAttributes<HTMLHeadingElement> &
  ConnectStyleProps;

type States = {};

export type {Props, States};
