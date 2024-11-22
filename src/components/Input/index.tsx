import {PureComponent, ReactNode} from 'react';
import {connectStyle} from '@/hoc';

import {Props, States} from './types';
import styles from './.module.css';

class Input extends PureComponent<Props, States> {
  render(): ReactNode {
    const {
      className,
      prefixClassName,
      prefixComponent,
      suffixClassName,
      suffixComponent,
      panelProps,
      panelRef = () => {},
      onChangeText = () => {},
      classNames = () => '',
      ...props
    } = this.props;

    const inputClassName = classNames(['input', className]);
    const _prefixClassName = classNames(['prefix-pane', prefixClassName]);
    const _suffixClassName = classNames(['suffix-pane', suffixClassName]);
    const panelClassName = classNames(['main-pane', panelProps?.className]);

    return (
      <div
        {...panelProps}
        ref={(ref) => panelRef(ref)}
        className={panelClassName}
      >
        {prefixComponent && (
          <div className={_prefixClassName}>{prefixComponent}</div>
        )}
        <input
          {...props}
          className={inputClassName}
          onChange={(e) => onChangeText(e.target.value, e)}
        />
        {suffixComponent && (
          <div className={_suffixClassName}>{suffixComponent}</div>
        )}
      </div>
    );
  }
}

export default connectStyle(styles)(Input);
