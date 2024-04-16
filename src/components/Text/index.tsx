import React from 'react';
import connectStyle from 'hoc/connectStyle';

import {Props, States} from './types';
import styles from './.module.css';

class Text extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {children, className, style, classNames = () => ''} = this.props;

    const textStyle = classNames(['vr-text', className]);

    return (
      <p className={textStyle} style={style}>
        {children}
      </p>
    );
  }
}

export default connectStyle(styles)(Text);
