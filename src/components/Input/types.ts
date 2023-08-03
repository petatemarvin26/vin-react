import {CSSProperties} from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  prefixComponent?: React.ReactNode;
  onChangeText?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

type States = {};

export type {Props, States};
