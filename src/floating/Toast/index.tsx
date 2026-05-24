import ReactDOM from 'react-dom';
import {createContext, useRef, useState} from 'react';
import {
  OnHideImmediate,
  OnShowToast,
  Props,
  State,
  ToastType,
  Value
} from './types';
import Popup from './Popup';

const initState: Value = {
  showToast() {},
  hideImmediate() {}
};
const providerInitState = {
  title: '',
  message: '',
  interval: 2
};

const Context = createContext(initState);

const Provider: React.FC<Props> = ({children}) => {
  const timeout = useRef<NodeJS.Timeout>(null);
  const [state, setState] = useState<State>(providerInitState);

  const showToast: OnShowToast = (message, config) => {
    setState((prev) => ({...prev, message}));
    if (config) setState((prev) => ({...prev, ...config}));

    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(
      () => {
        setState(providerInitState);
        clearTimeout(timeout.current!);
      },
      (config?.interval || 2) * 1000
    );
  };

  const hideImmediate: OnHideImmediate = () => {
    setState(providerInitState);
  };

  const renderPortal = ReactDOM.createPortal(
    <Popup message={state.message} title={state.title} />,
    document.body
  );

  return (
    <Context.Provider value={{showToast, hideImmediate}}>
      {renderPortal}
      {children}
    </Context.Provider>
  );
};

const Toast: ToastType = {
  Context,
  Provider
};

export default Toast;
