import {PureComponent, ReactNode} from 'react';
import {connectStyle} from '@/hoc';

import {Props, States} from './types';
import styles from './.module.css';

class View extends PureComponent<Props, States> {
  render(): ReactNode {
    const {
      className,
      children,
      reference = () => {},
      classNames = () => '',
      ...rest
    } = this.props;

    const viewStyle = classNames(['vr-view', className]);

    return (
      <div {...rest} className={viewStyle} ref={(_ref) => reference(_ref!)}>
        {children}
      </div>
    );
  }
}

export default connectStyle(styles)(View);
