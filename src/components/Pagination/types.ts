import React from 'react';
import {ConnectStyleProps} from 'hoc/connectStyle/types';

type HandleClickPage = {
  (key: number): (
    page: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

type State = {
  pages: Array<number>;
  currentPage: number;
};

type Props = {
  className?: string;
  /**
   * className for PageNum Component
   */
  classNamePageNum?: string;
  /**
   * Total number of data
   */
  totalData: number;
  /**
   * Max number display of page number
   */
  maxPageDisplay: number;
  /**
   * Current page selected
   */
  currentPage?: number;
  onPageChange?: (
    page: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
} & ConnectStyleProps;

export type {Props, State, HandleClickPage};
