import {Context, ComponentClass, ReactNode, FunctionComponent} from 'react';

type ModalConfig = {
  isClosableOutside: boolean;
};

type OnShowModal = {
  (component: ReactNode, config?: ModalConfig): void;
};

type OnHideModal = {
  (): void;
};

type Value = {
  showModal: OnShowModal;
  hideModal: OnHideModal;
};

type Props = {
  children: ReactNode;
  portalTo?: HTMLElement;
};

type ModalType = {
  Context: Context<Value>;
  Provider: FunctionComponent<Props>;
};

export type {OnShowModal, OnHideModal, ModalConfig, Value, Props, ModalType};
