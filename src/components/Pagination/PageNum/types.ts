import {MouseEventHandler, MouseEvent} from 'react';
import {ConnectStyleProps} from '@/hoc/types';

type OnClick = MouseEventHandler<HTMLButtonElement>;

type Props = {
  className?: string;
  number?: number;
  isSelected?: boolean;
  onClick?: (num: number, e: MouseEvent<HTMLButtonElement>) => void;
} & ConnectStyleProps;

export type {Props, OnClick};
