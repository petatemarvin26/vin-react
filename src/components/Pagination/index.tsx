import {PureComponent, ReactNode} from 'react';
import {connectStyle} from '@/hoc';

import PageNum from './PageNum';
import {HandleClickPage, Props, State} from './types';
import styles from './.module.css';

class Pagination extends PureComponent<Props, State> {
  ref: HTMLDivElement | null = null;
  MAX_PAGE_DISPLAY = 5;

  constructor(props: Props) {
    super(props);
    this.state = {
      pages: [],
      currentPage: 1
    };
  }

  componentDidMount(): void {
    const {currentPage = 1} = this.props;
    let startpage = currentPage > 1 ? currentPage - 1 : currentPage;
    const pages = this.renderPages(startpage);
    this.setState((prev) => ({...prev, pages, currentPage}));
  }

  renderPages = (start: number) => {
    const {totalData, maxPageDisplay = this.MAX_PAGE_DISPLAY} = this.props;
    const length = totalData < maxPageDisplay ? totalData : maxPageDisplay;
    return Array.from({length}, (_, i) => start + i);
  };

  handleClickPage: HandleClickPage = (key) => (page, e) => {
    const {totalData, onPageChange = () => {}} = this.props;
    const pages_len = this.state.pages.length,
      half = pages_len / 2,
      mid_num = Math.ceil(half),
      is_left = half % 2 === 0 ? key <= mid_num : key < mid_num,
      is_right = key > mid_num;

    let pages = this.state.pages;
    if (is_left && !is_right && pages[0] > 1) {
      pages = pages.map((val) => val - 1);
    }
    if (!is_left && is_right && pages[pages_len - 1] < totalData) {
      pages = pages.map((val) => val + 1);
    }
    this.setState((prev) => ({...prev, pages, currentPage: page}));
    onPageChange(page, e);
  };

  render(): ReactNode {
    const {handleClickPage} = this;
    const {className, classNamePageNum, classNames = () => ''} = this.props;
    const {pages} = this.state;

    const _className = classNames(['vr-pagination', className]);
    const renderPageNum = pages.map((page, key) => {
      return (
        <PageNum
          key={key}
          className={classNamePageNum}
          number={page}
          isSelected={this.state.currentPage === page}
          onClick={handleClickPage(key + 1)}
        />
      );
    });

    return (
      <div ref={(ref) => (this.ref = ref)} className={_className}>
        {renderPageNum}
      </div>
    );
  }
}
export default connectStyle(styles)(Pagination);
