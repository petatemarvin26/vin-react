import {useContext} from 'react';
import {Toast} from '@/float';

import {UseToast} from './types';

const useToast: UseToast = () => {
  const {showToast, hideImmediate} = useContext(Toast.Context);
  return [showToast, hideImmediate];
};

export default useToast;
