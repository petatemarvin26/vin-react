export type Props = {
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
  onChangeText: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

// type Props = {
//   prefixClassName?: string;
//   prefixComponent?: ReactNode;
//   suffixClassName?: string;
//   suffixComponent?: ReactNode;
//   classNames?: (names: string[]) => string;
//   panelRef?: (ref: HTMLDivElement | null) => any;
//   panelProps?: React.HTMLAttributes<HTMLDivElement>;
//   onChangeText?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
// } & React.InputHTMLAttributes<HTMLInputElement> &
//   ConnectStyleProps;

// type States = {};

// export type {Props, States};
