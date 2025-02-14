import {OnHideModal, OnShowModal} from '@/float/Modal/types';

export type UseModal = {
  (): [OnShowModal, OnHideModal];
};
