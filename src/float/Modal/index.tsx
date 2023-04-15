import React, {createContext} from 'react';
import Template from './Template';
import {
  Value,
  Props,
  State,
  OnShowModal,
  OnHideModal,
  ModalType
} from './types';

const initState: Value = {
  onShowModal() {},
  onHideModal() {}
};

const Context = createContext(initState);

class Provider extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {component: null};
  }

  onShowModal: OnShowModal = (component) => {
    this.setState((prev) => ({...prev, component}));
  };
  onHideModal: OnHideModal = () => {
    this.setState((prev) => ({...prev, component: null}));
  };

  render(): React.ReactNode {
    const {onShowModal, onHideModal} = this;
    const {children} = this.props;
    const {component} = this.state;
    return (
      <Context.Provider value={{onShowModal, onHideModal}}>
        <Template visible={!!component}>{component}</Template>
        {children}
      </Context.Provider>
    );
  }
}

const Modal: ModalType = {
  Context,
  Provider
};
export default Modal;
