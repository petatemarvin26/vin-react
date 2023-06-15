import {CSSProperties} from 'react';

type Props = {
  source: string;
  className?: string;
  style?: CSSProperties;
  onLoad?: () => void;
};

type States = {};

export type {Props, States};
