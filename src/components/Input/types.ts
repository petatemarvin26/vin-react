import {CSSProperties} from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

type States = {};

export type {Props, States};
