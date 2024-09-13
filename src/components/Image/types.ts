import {CSSProperties} from 'react';

type Props = {
  src: string;
  className?: string;
  style?: CSSProperties;
  ref?: React.LegacyRef<HTMLImageElement>;
  onLoadInit?: () => void;
  onLoadDone?: () => void;
  onLoading?: (percent: number) => void;
} & React.HTMLAttributes<HTMLImageElement>;

type States = {
  src: any;
};

export type {Props, States};
