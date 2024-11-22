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
      type = 'button',
      classNames = () => '',
      onClick = () => {},
      ...rest
    } = this.props;

    const _className = classNames(['vr-button', className]);

    return (
      <button {...rest} type={type} className={_className} style={style} onClick={onClick}>
        {title ? title : children}
      </button>
    );
  }
}

export default connectStyle(styles)(Button);
