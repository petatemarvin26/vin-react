import React, {ReactNode} from 'react';
import {connectStyle} from 'hoc';

import {Props} from './types';
import {DownIcon, UpIcon} from './icons';
import styles from './.module.css';

class Counter extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleChange = (numericand: number) => () => {
    const {min = 0, max = 0, value = 0, onChange} = this.props;
    const next = value + numericand;

    if (next < min) return;
    if (max) if (next > max) return;

    onChange && onChange(next);
  };

  render(): ReactNode {
    const {handleChange} = this;
    const {
      className,
      value = 0,
      classNames = () => '',
      classNameButton,
      classNameIcon,
      classNameNumber
    } = this.props;

    const counterStyle = classNames(['vr-counter', className]);
    const btnActionStyle = classNames(['vr-btn-action', classNameButton]);
    const iconStyle = classNames(['vr-icon', classNameIcon]);
    const numberStyle = classNames(['vr-number', classNameNumber]);

    return (
      <div className={counterStyle}>
        <button className={btnActionStyle} onClick={handleChange(1)}>
          <UpIcon className={iconStyle} />
        </button>
        <p className={numberStyle}>{value}</p>
        <button className={btnActionStyle} onClick={handleChange(-1)}>
          <DownIcon className={iconStyle} />
        </button>
      </div>
    );
  }
}

export default connectStyle(styles)(Counter);
