import {PureComponent, ReactNode, MouseEventHandler} from 'react';
import {connectStyle} from '@/hoc';

import {OnClick, Props} from './types';
import styles from './.module.css';

class PageNum extends PureComponent<Props> {
  handleClick: OnClick = (e) => {
    const {number = 0, onClick = () => {}} = this.props;
    onClick(number, e);
  };

  render(): ReactNode {
    const {handleClick} = this;
    const {className, number, isSelected, classNames = () => ''} = this.props;

    const _className = classNames(['vr-page-num', className], {
      'vr-page-num-sel': isSelected
    });

    return (
      <button className={_className} onClick={handleClick}>
        {number}
      </button>
    );
  }
}

export default connectStyle(styles)(PageNum);
