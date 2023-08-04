type OnClick = {
  (num: number): void;
};

type Props = {
  className?: string;
  number?: number;
  isSelected?: boolean;
  onClick?: OnClick;
};

export type {Props};
