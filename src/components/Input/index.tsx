import {PureComponent, ReactNode} from 'react';
import {connectStyle} from '@/hoc';

import {Props, States} from './types';
import styles from './styles.css';

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

    const panelClassName = classNames(['vr-input-pane', panelProps?.className]);
    const inputClassName = classNames(['vr-input', className]);
    const _prefixClassName = classNames(['vr-prefix-pane', prefixClassName]);
    const _suffixClassName = classNames(['vr-suffix-pane', suffixClassName]);

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
