import ReactDOM from 'react-dom';
import {PureComponent, createContext} from 'react';
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

const Context = createContext(initState);
class Provider extends PureComponent<Props, State> {
  INTERVAL = 3;
  INIT_STATE = {
    title: '',
    message: '',
    options: {
      interval: this.INTERVAL
    }
  };
  root: HTMLElement;
  timeout?: NodeJS.Timeout;

  constructor(props: Props) {
    super(props);
    this.root = document.getElementById(props.portalTo ?? 'root')!;
    this.state = this.INIT_STATE;
  }

  showToast: OnShowToast = (context) => {
    if (typeof context === 'string') {
      this.setState((prev) => ({...prev, message: context}));
    } else {
      this.setState((prev) => ({...prev, ...context}));
    }

    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState(this.INIT_STATE);
      clearTimeout(this.timeout);
    }, (this.state.options?.interval || this.INTERVAL) * 1000);
  };

  hideImmediate: OnHideImmediate = () => {
    this.setState(this.INIT_STATE);
  };

  render(): React.ReactNode {
    const {showToast, hideImmediate} = this;

    const {message, title} = this.state;
    const {children} = this.props;

    const renderPopup = (
      <Popup visible={!!message.length} message={message} title={title} />
    );

    const renderPortal = ReactDOM.createPortal(renderPopup, this.root);

    return (
      <Context.Provider value={{showToast, hideImmediate}}>
        {renderPortal}
        {children}
      </Context.Provider>
    );
  }
}

const Toast: ToastType = {
  Context,
  Provider
};

export default Toast;
