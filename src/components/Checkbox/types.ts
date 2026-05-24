export type Props = {
  className?: string;
  label?: string;
  disabled?: boolean;
  size?: string;
  color?: string;
  value: boolean;
  onChange(status: boolean): void;
};
