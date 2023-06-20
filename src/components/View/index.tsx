import React, {forwardRef} from 'react';
import {Props, States} from './types';
import styles from './.module.css';

class View extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const Component = forwardRef<HTMLDivElement, Props>((props, ref) => {
      const {className, children} = this.props;

      let _className = styles['view'];
      if (className) _className = ` ${className}`;

      return (
        <div {...props} className={_className} ref={ref}>
          {children}
        </div>
      );
    });
    return <Component {...this.props} />;
  }
}

export default View;
