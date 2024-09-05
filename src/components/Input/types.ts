import {CSSProperties, ReactNode, ChangeEvent} from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  prefixComponent?: ReactNode;
  ref?: React.LegacyRef<HTMLDivElement>;
  inputRef?: (ref: HTMLInputElement | null) => any;
  onChangeText?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
};

type States = {};

export type {Props, States};
