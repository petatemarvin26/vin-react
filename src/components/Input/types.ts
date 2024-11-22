import {ConnectStyleProps} from '@/hoc/types';
import {ReactNode, ChangeEvent} from 'react';

type Props = {
  prefixClassName?: string;
  prefixComponent?: ReactNode;
  suffixClassName?: string;
  suffixComponent?: ReactNode;
  panelRef?: (ref: HTMLDivElement | null) => any;
  panelProps?: React.HTMLAttributes<HTMLDivElement>;
  onChangeText?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement> &
  ConnectStyleProps;

type States = {};

export type {Props, States};
