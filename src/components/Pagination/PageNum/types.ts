import {ConnectStyleProps} from 'hoc/connectStyle/types';

type OnClick = {};

type Props = {
  className?: string;
  number?: number;
  isSelected?: boolean;
  onClick?: (
    num: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
} & ConnectStyleProps;

export type {Props};
