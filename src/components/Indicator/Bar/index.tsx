import {PureComponent, ReactNode} from 'react';
import styles from './.module.css';
import {Props} from './types';

class Bar extends PureComponent<Props> {
  render(): ReactNode {
    const {className, thumbClassName, style, thumbStyle, progress, ...rest} =
      this.props;

    let _className = styles['bar'];
    let _thumbClass = styles['thumb'];
    if (className) _className += ` ${className}`;
    if (thumbClassName) _thumbClass += ` ${thumbClassName}`;

    return (
      <div {...rest} className={_className} style={style}>
        <div
          {...rest}
          className={_thumbClass}
          style={{...thumbStyle, width: `${progress}%`}}
        />
      </div>
    );
  }
}

export default Bar;
