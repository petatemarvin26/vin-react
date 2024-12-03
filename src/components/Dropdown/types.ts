import {Props as ItemProps} from '@/common/components/Item/types';
import {ConnectStyleProps} from '@/hoc/types';

type Props = {
  dropdownClassName?: string;
  selectedClassName?: string;
  selectedBtnClassName?: string;
  dropdownListClassName?: string;
  dropdownListContClassName?: string;
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
