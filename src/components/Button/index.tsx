import React from 'react';

import {Props, States} from './types';
import styles from './.module.css';

class Button extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {className, style, title, children, onClick} = this.props;

    let _className = styles['button'];
    if (className) _className += ` ${className}`;

    return (
      <button
        aria-label='button'
        className={_className}
        style={style}
        onClick={onClick}
      >
        {title ? title : children}
      </button>
    );
  }
}

export default Button;
