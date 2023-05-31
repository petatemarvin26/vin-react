import React from 'react';

import {Props} from './types';
import styles from './.module.css';

class Text extends React.PureComponent<Props> {
  render(): React.ReactNode {
    const {children, className, style} = this.props;

    let textStyle = styles['text'];

    if (className) {
      textStyle += ` ${className}`;
    }

    return (
      <p className={textStyle} style={style}>
        {children}
      </p>
    );
  }
}

export default Text;
