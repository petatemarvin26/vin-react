import {CSSProperties, MouseEventHandler, UIEventHandler} from 'react';

import {ConnectStyleProps} from '@/hoc/types';

type Props = {
  id?: any;
  style?: CSSProperties;
  children?: any;
  className?: string;
  ref?: React.LegacyRef<HTMLParagraphElement>;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onScroll?: UIEventHandler<HTMLDivElement>;
} & ConnectStyleProps;

type States = {};

export type {Props, States};
