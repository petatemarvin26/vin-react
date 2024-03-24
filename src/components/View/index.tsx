import React, {forwardRef} from 'react';
import {Props, States} from './types';
import styles from './.module.css';

class View extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {reference = () => {}, className, children, ...rest} = this.props;

    let _className = styles['view'];
    if (className) _className = ` ${className}`;

    return (
      <div {...rest} className={_className} ref={(_ref) => reference(_ref!)}>
        {children}
      </div>
    );
  }
}

export default View;
