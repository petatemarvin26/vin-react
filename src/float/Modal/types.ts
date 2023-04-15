type OnShowModal = {
  (component: React.ElementType): void;
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
};

type ModalType = {
  Context: React.Context<Value>;
  Provider: React.ElementType;
};

export type {OnShowModal, OnHideModal, Value, State, Props, ModalType};
