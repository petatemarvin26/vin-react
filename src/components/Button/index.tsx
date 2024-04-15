import React from 'react';
import {connectStyle} from 'hoc';

import {Props, States} from './types';
import styles from './.module.css';

class Button extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {
      className,
      style,
      title,
      children,
      classNames = () => '',
      onClick
    } = this.props;

    const btnStyles = classNames(['vr-button', className]);

    return (
      <button className={btnStyles} style={style} onClick={onClick}>
        {title ? title : children}
      </button>
    );
  }
}

export default connectStyle(styles)(Button);
