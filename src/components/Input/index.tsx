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
      prefixComponent,
      onChangeText = () => {}
    } = this.props;

    let _className = styles['main-pane'];
    if (className) _className += ` ${className}`;

    return (
      <div className={_className}>
        {prefixComponent && (
          <div className={styles['prefix-pane']}>{prefixComponent}</div>
        )}
        <input
          className={styles['input']}
          style={style}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeText(e.target.value, e)}
        />
      </div>
    );
  }
}

export default Input;
