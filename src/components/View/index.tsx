import React from 'react';

import {Props} from './types';
import styles from './.module.css';

class View extends React.PureComponent<Props> {
  render(): React.ReactNode {
    const {children, className, style} = this.props;

    let viewStyle = styles['view'];

    if (className) {
      viewStyle += ` ${className}`;
    }

    return (
      <div className={viewStyle} style={style}>
        {children}
      </div>
    );
  }
}

export default View;
