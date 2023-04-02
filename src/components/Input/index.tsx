import React from 'react';

import {Props} from './types';
import styles from './.module.css';

class Input extends React.PureComponent<Props> {
  render(): React.ReactNode {
    const {children, className, style} = this.props;

    let inputStyle = styles['input'];

    if (className) {
      inputStyle += ` ${className}`;
    }

    return (
      <button className={inputStyle} style={style}>
        {children}
      </button>
    );
  }
}

export default Input;
