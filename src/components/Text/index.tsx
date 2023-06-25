import React from 'react';

import {Props, States} from './types';
import styles from './.module.css';

class Text extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {children, className, style} = this.props;

    let _className = styles['text'];
    if (className) _className += ` ${className}`;

    return (
      <p className={_className} style={style}>
        {children}
      </p>
    );
  }
}

export default Text;
