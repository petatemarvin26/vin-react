import React from 'react';
import connectStyle from 'hoc/connectStyle';

import {Props, States} from './types';
import styles from './.module.css';

class HeaderText extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {children, className, style, classNames = () => ''} = this.props;

    const headerTextStyle = classNames(['header-text', className]);

    return (
      <h1 className={headerTextStyle} style={style}>
        {children}
      </h1>
    );
  }
}

export default connectStyle(styles)(HeaderText);
