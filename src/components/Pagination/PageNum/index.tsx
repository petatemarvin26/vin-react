import React from 'react';
import connectStyle from 'hoc/connectStyle';

import {Props} from './types';
import styles from './.module.css';

class PageNum extends React.PureComponent<Props> {
  handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const {number = 0, onClick = () => {}} = this.props;
    onClick(number, e);
  };

  render(): React.ReactNode {
    const {handleClick} = this;
    const {className, number, isSelected, classNames = () => ''} = this.props;

    const pageNumStyle = classNames(['vr-page-num', className], {
      'vr-page-num-sel': isSelected
    });

    return (
      <button className={pageNumStyle} onClick={handleClick}>
        {number}
      </button>
    );
  }
}

export default connectStyle(styles)(PageNum);
