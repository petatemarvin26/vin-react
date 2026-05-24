export type Props = {
  label?: string;
  disabled?: boolean;
  size?: string;
  value: boolean;
  onChange(status: boolean): void;
};
