import {PureComponent, ReactNode} from 'react';
import {connectStyle} from '@/hoc';

import {Props, States} from './types';
import styles from './.module.css';

class HeaderText extends PureComponent<Props, States> {
  render(): ReactNode {
    const {
      children,
      className,
      style,
      classNames = () => '',
      ...rest
    } = this.props;

    const headerTextStyle = classNames(['header-text', className]);

    return (
      <h1 {...rest} className={headerTextStyle} style={style}>
        {children}
      </h1>
    );
  }
}

export default connectStyle(styles)(HeaderText);
