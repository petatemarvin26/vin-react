import {CSSProperties, ReactNode, ChangeEvent} from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  prefixComponent?: ReactNode;
  onChangeText?: (
    value: string,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
};

type States = {};

export type {Props, States};
