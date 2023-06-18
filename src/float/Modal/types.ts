type OnShowModal = {
  (component: JSX.Element): void;
};

type OnHideModal = {
  (): void;
};

type Value = {
  onShowModal: OnShowModal;
  onHideModal: OnHideModal;
};

type State = {
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
  Context: React.Context<Value>;
  Provider: React.ComponentClass<Props>;
};

export type {OnShowModal, OnHideModal, Value, State, Props, ModalType};
