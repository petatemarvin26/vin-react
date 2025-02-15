import {ComponentClass, Context} from 'react';

type ToastOptions = {
  /**
   * how many `seconds` does the toast's visible in the screen.
   * 
   * by `default` its 3 seconds
   */
  interval?: number;
};

type ToastConfig = {
  title?: string;
  message: string;
  options?: ToastOptions;
};

interface OnShowToast {
  (message: string): void;
  (toast: ToastConfig): void;
}

type OnHideImmediate = {
  (): void;
};

type Props = {
  children: React.ReactNode;
  portalTo?: string;
};

type State = {} & ToastConfig;

type Value = {
  showToast: OnShowToast;
  hideImmediate: OnHideImmediate;
};

type ToastType = {
  Context: Context<Value>;
  Provider: ComponentClass<Props>;
};

export {
  Props,
  State,
  Value,
  ToastConfig,
  ToastOptions,
  OnShowToast,
  OnHideImmediate,
  ToastType
};
