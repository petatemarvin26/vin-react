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
    return (
      <input
        className={`${styles.input} ${className}`}
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={({target: {value}}) => onChangeText(value)}
      />
    );
  }
}

export default Input;
