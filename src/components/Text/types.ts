import {CSSProperties} from 'react';

import {ConnectStyleProps} from '@/hoc/types';

type Props = {
  className?: string;
  style?: CSSProperties;
  children?: any;
  ref?: React.LegacyRef<HTMLParagraphElement>;
} & React.HTMLAttributes<HTMLParagraphElement> &
  ConnectStyleProps;

type States = {};

export type {Props, States};
