export type Props = {
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
  onChangeText?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
