import React from 'react';

import {Props} from './types';
import styles from './.module.css';

class PageNum extends React.PureComponent<Props> {
  handleClick = () => {
    const {number, onClick} = this.props;
    onClick && onClick(number);
  };

  render(): React.ReactNode {
    const {handleClick} = this;
    const {className, number, isSelected} = this.props;

    let _className = styles['main-pane'];
    if (className) _className += ` ${className}`;
    if (isSelected) _className += ` ${styles['selected']}`;

    return (
      <button className={_className} onClick={handleClick}>
        {number}
      </button>
    );
  }
}

export default PageNum;
