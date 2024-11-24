import {ConnectStyleProps} from '@/hoc/types';

type Props = {
  className?: string;
  classNameButton?: string;
  classNameIcon?: string;
  classNameNumber?: string;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (next: number) => void;
} & ConnectStyleProps;

export type {Props};
