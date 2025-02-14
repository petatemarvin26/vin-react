import {useContext} from 'react';
import {Modal} from '@/float';

import {UseModal} from './types';

const useModal: UseModal = () => {
  const {showModal, hideModal} = useContext(Modal.Context);
  return [showModal, hideModal];
};

export default useModal;
