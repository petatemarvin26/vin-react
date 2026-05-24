import {ReactNode, createContext, useState} from 'react';
import ReactDOM from 'react-dom';

import Transparent from './Transparent';

import {
  Value,
  Props,
  OnShowModal,
  OnHideModal,
  ModalType,
  ModalConfig
} from './types';

const initState: Value = {
  showModal() {},
  hideModal() {}
};

const Context = createContext(initState);

const Provider: React.FC<Props> = ({children, portalTo}) => {
  const [component, setComponent] = useState<ReactNode>(null);
  const [config, setConfig] = useState<ModalConfig>({isClosableOutside: true});

  const showModal: OnShowModal = (component, config) => {
    setComponent(component);
    if (config) setConfig(config);
  };

  const hideModal: OnHideModal = () => {
    setComponent(null);
  };

  const handleClickOutside = () => {
    if (config.isClosableOutside) hideModal();
  };
  const renderPortal = ReactDOM.createPortal(
    <Transparent component={component} onClose={handleClickOutside} />,
    portalTo ?? document.body
  );

  return (
    <Context.Provider value={{showModal, hideModal}}>
      {renderPortal}
      {children}
    </Context.Provider>
  );
};

const Modal: ModalType = {
  Context,
  Provider
};
export default Modal;
