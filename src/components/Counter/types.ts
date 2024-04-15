import {ClassNames} from 'hoc/connectStyle/types';

type Props = {
  className?: string;
  classNameButton?: string;
  classNameIcon?: string;
  classNameNumber?: string;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (next: number) => void;
  classNames?: ClassNames;
};

export type {Props};
