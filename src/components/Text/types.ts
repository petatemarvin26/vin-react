import {CSSProperties} from 'react';

import {ConnectStyleProps} from '@/hoc/types';

type Props = {
  className?: string;
  style?: CSSProperties;
  children?: any;
} & ConnectStyleProps;

type States = {};

export type {Props, States};
