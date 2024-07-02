import {PureComponent, ReactNode} from 'react';
import {connectStyle} from '@/hoc';

import {Props, States} from './types';
import styles from './.module.css';

class Button extends PureComponent<Props, States> {
  render(): ReactNode {
    const {
      className,
      style,
      title,
      children,
      classNames = () => '',
      onClick
    } = this.props;

    const btnStyles = classNames(['vr-button', className]);

    return (
      <button className={btnStyles} style={style} onClick={onClick}>
        {title ? title : children}
      </button>
    );
  }
}

export default connectStyle(styles)(Button);
