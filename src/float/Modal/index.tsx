import {PureComponent, ReactNode, createContext} from 'react';
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
  showModal() {},
  hideModal() {}
};

const Context = createContext(initState);

class Provider extends PureComponent<Props, State> {
  root: HTMLElement;
  constructor(props: Props) {
    super(props);
    this.state = {component: null, config: {isClosableOutside: true}};
    this.root = document.getElementById(props.portalTo ?? 'root')!;
  }

  showModal: OnShowModal = (component, config = this.state.config) => {
    document.body.style.overflowY = 'hidden';
    this.setState((prev) => ({...prev, component, config}));
  };
  hideModal: OnHideModal = () => {
    document.body.style.overflowY = 'auto';
    this.setState((prev) => ({...prev, component: null}));
  };

  render(): ReactNode {
    const {root, showModal, hideModal} = this;
    const {children} = this.props;
    const {component, config} = this.state;

    const renderTemplate = (
      <Transparent
        root={root}
        onClose={() => config.isClosableOutside && hideModal()}
        visible={!!component}
      >
        {component}
      </Transparent>
    );

    const renderPortal = ReactDOM.createPortal(renderTemplate, root);

    return (
      <Context.Provider value={{showModal, hideModal}}>
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
