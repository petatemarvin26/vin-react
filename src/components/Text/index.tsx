import {PureComponent, ReactNode} from 'react';
import {connectStyle} from '@/hoc';

import {Props, States} from './types';
import styles from './.module.css';

class Text extends PureComponent<Props, States> {
  render(): ReactNode {
    const {
      children,
      className,
      style,
      classNames = () => '',
      ...rest
    } = this.props;

    const textStyle = classNames(['vr-text', className]);

    return (
      <p {...rest} className={textStyle} style={style}>
        {children}
      </p>
    );
  }
}

export default connectStyle(styles)(Text);
