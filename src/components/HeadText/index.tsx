import React from 'react';

import {Props, States} from './types';
import styles from './.module.css';

class HeadText extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {children, className, style} = this.props;

    let _className = styles['head-text'];
    if (className) _className += ` ${className}`;

    return (
      <h1 className={_className} style={style}>
        {children}
      </h1>
    );
  }
}

export default HeadText;
