import {
  Button,
  Counter,
  HeaderText,
  Image,
  Indicator,
  Input,
  Pagination,
  Text,
  View
} from './components';
import {Modal} from './float';
import {
  formatNumber,
  hasLetter,
  smartCompare,
  toNameCase,
  toPascalCase
} from './utils';
import {connectStyle} from './hoc';
import {ConnectStyleProps} from './hoc/connectStyle/types';

export {
  // dom components
  Button,
  Counter,
  HeaderText,
  Image,
  Indicator,
  Input,
  Pagination,
  Text,
  View,
  // floating components
  Modal,
  // hoc
  connectStyle,
  // utilities
  formatNumber,
  hasLetter,
  smartCompare,
  toNameCase,
  toPascalCase
};

export type {ConnectStyleProps};
