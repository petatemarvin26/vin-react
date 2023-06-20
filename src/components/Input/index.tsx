import React from 'react';

import {Props, States} from './types';
import styles from './.module.css';

class Input extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {
      className,
      style,
      placeholder,
      value,
      onChangeText = () => {}
    } = this.props;

    let _className = styles['input'];
    if (className) _className += ` ${className}`;

    return (
      <input
        className={_className}
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value, e)}
      />
    );
  }
}

export default Input;
