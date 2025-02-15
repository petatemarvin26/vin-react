import {OnShowToast, OnHideImmediate} from '@/float/Toast/types';

export type UseToast = {
  (): [OnShowToast, OnHideImmediate];
};
