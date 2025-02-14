import {Context, ComponentClass} from 'react';

type ModalConfig = {
  isClosableOutside: boolean;
};

type OnShowModal = {
  (component: JSX.Element, config?: ModalConfig): void;
};

type OnHideModal = {
  (): void;
};

type Value = {
  showModal: OnShowModal;
  hideModal: OnHideModal;
};

type State = {
  config: ModalConfig;
  component: any;
};

type Props = {
  children?: any;
  /**
   * Set the id of an element that already registered in the DOM
   */
  portalTo?: string;
};

type ModalType = {
  Context: Context<Value>;
  Provider: ComponentClass<Props>;
};

export type {
  OnShowModal,
  OnHideModal,
  ModalConfig,
  Value,
  State,
  Props,
  ModalType
};
