import {ToastConfig} from '../types';

type Props = {
  title?: ToastConfig['title'];
  message: ToastConfig['message'];
  visible: boolean;
};

type State = {};

export {Props, State};
