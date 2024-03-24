import React, {ReactNode} from 'react';
import styles from './.module.css';
import {DownIcon, UpIcon} from './icons';

import {Props} from './types';

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
    const {className, value = 0} = this.props;

    let _className = styles['main-pane'];
    if (className) _className += ` ${className}`;

    return (
      <div className={_className}>
        <button className={styles['add-btn']} onClick={handleChange(1)}>
          <UpIcon className={styles['icon']} />
        </button>
        <p className={styles['number']}>{value}</p>
        <button className={styles['minus-btn']} onClick={handleChange(-1)}>
          <DownIcon className={styles['icon']} />
        </button>
      </div>
    );
  }
}

export default Counter;
