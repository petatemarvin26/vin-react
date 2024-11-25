import {Props as ItemProps} from '@/common/components/Item/types';
import {ConnectStyleProps} from '@/hoc/types';

type Props = {
  dClassName?: string;
  spClassName?: string;
  sbClassName?: string;
  dlClassName?: string;
  dlcClassName?: string;
  placeholder?: string;
  suffixComponent?: any;
  suffixClassName?: string;
  data: Array<ItemProps>;
  onChange?: (data?: ItemProps) => void;
} & ConnectStyleProps;

type State = {
  data: Array<ItemProps>;
  show: boolean;
  selected?: ItemProps;
};

export type {Props, State};
