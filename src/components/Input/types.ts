import {CSSProperties} from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  onChangeText?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

type States = {};

export type {Props, States};
