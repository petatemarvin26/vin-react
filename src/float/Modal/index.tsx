import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import Transparent from './Transparent';
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
  root: HTMLElement;
  constructor(props: Props) {
    super(props);
    this.state = {component: null};
    this.root = document.getElementById(props.portalTo ?? 'root')!;
  }

  onShowModal: OnShowModal = (component) => {
    document.body.style.overflowY = 'hidden';
    this.setState((prev) => ({...prev, component}));
  };
  onHideModal: OnHideModal = () => {
    document.body.style.overflowY = 'auto';
    this.setState((prev) => ({...prev, component: null}));
  };

  render(): React.ReactNode {
    const {root, onShowModal, onHideModal} = this;
    const {children} = this.props;
    const {component} = this.state;

    const renderTemplate = (
      <Transparent root={root} onClose={onHideModal} visible={!!component}>
        {component}
      </Transparent>
    );

    const renderPortal = ReactDOM.createPortal(renderTemplate, root);

    return (
      <Context.Provider value={{onShowModal, onHideModal}}>
        {renderPortal}
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
