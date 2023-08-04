import React from 'react';

import PageNum from './PageNum';
import {HandleClickPage, Props, State} from './types';
import styles from './.module.css';

class Pagination extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pages: []
    };
  }

  componentDidMount(): void {
    const pages = this.renderPages(1);
    this.setState((prev) => ({...prev, pages}));
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const {totalItems} = this.props;
    if (prevProps.totalItems !== totalItems) {
      const pages = this.renderPages(1);
      this.setState((prev) => ({...prev, pages}));
    }
  }

  handleClickPage: HandleClickPage = (key) => (page) => {
    const {renderPages} = this;
    const {maxPagesDisplay, totalItems, maxItemsDisplay, onPageChange} =
      this.props;
    const {pages} = this.state;

    onPageChange && onPageChange(page);

    const TOTAL_PAGES = Math.floor(totalItems / maxItemsDisplay);
    const SIDE_LENGTH = Math.floor(maxPagesDisplay / 2);
    const HEAD = pages[0];
    const LEAP = pages[maxPagesDisplay - 1];
    let nextPages = pages;

    if (maxPagesDisplay % 2 !== 0 && SIDE_LENGTH + 1 === key) return;

    if (key <= SIDE_LENGTH && HEAD > 0) {
      const OFFSET = SIDE_LENGTH - key + 1;
      const NEXT_PAGE = OFFSET - HEAD;
      const START_PAGE = Math.abs(NEXT_PAGE ? NEXT_PAGE : 1);
      nextPages = renderPages(START_PAGE);
    }
    if (key > SIDE_LENGTH && LEAP < TOTAL_PAGES) {
      const OFFSET = key - SIDE_LENGTH - 1;
      const NEXT_LEAP_PAGE = OFFSET + LEAP;
      const FINAL_LEAP_PAGE =
        NEXT_LEAP_PAGE > TOTAL_PAGES ? NEXT_LEAP_PAGE - 1 : NEXT_LEAP_PAGE;
      const START_PAGE = FINAL_LEAP_PAGE - (maxPagesDisplay - 1);
      nextPages = renderPages(START_PAGE);
    }

    this.setState((prev) => ({...prev, pages: nextPages}));
  };

  renderPages = (start: number) => {
    const {maxPagesDisplay, maxItemsDisplay, totalItems} = this.props;
    const TOTAL_PAGES = Math.ceil(totalItems / maxItemsDisplay);
    const length =
      TOTAL_PAGES > maxPagesDisplay ? maxPagesDisplay : TOTAL_PAGES;
    return Array.from({length}, (_, i) => start + i);
  };

  render(): React.ReactNode {
    const {handleClickPage} = this;
    const {className, pageClassName, currentPage} = this.props;
    const {pages} = this.state;

    let _className = styles['main-pane'];
    if (className) _className += ` ${className}`;

    const renderPageNum = pages.map((page, key) => (
      <PageNum
        className={pageClassName}
        key={page}
        number={page}
        isSelected={currentPage === page}
        onClick={handleClickPage(key + 1)}
      />
    ));

    return <div className={_className}>{renderPageNum}</div>;
  }
}
export default Pagination;
