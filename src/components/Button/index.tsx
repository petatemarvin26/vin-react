import React from 'react';

import {Props} from './types';
import styles from './.module.css';

class Button extends React.PureComponent<Props> {
  render(): React.ReactNode {
    const {children, className, style} = this.props;

    let buttonStyle = styles['button'];

    if (className) {
      buttonStyle += ` ${className}`;
    }

    return (
      <button className={buttonStyle} style={style}>
        {children}
      </button>
    );
  }
}

export default Button;
