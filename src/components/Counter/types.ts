type OnChange = {
  (next: number): void;
};

type Props = {
  className?: string;
  min?: number;
  max?: number;
  value?: number;
  onChange?: OnChange;
};

export type {Props};
