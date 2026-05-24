import {ComponentClass, Context, FunctionComponent} from 'react';

type ToastConfig = {
  title?: string;
  interval?: number;
};

type OnShowToast = {
  (message: string, config?: ToastConfig): void;
};

type OnHideImmediate = {
  (): void;
};

type Props = {
  children: React.ReactNode;
};

type State = {
  message: string;
} & ToastConfig;

type Value = {
  showToast: OnShowToast;
  hideImmediate: OnHideImmediate;
};

type ToastType = {
  Context: Context<Value>;
  Provider: FunctionComponent<Props>;
};

export {
  Props,
  State,
  Value,
  ToastConfig,
  OnShowToast,
  OnHideImmediate,
  ToastType
};
