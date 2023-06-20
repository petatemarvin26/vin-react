import React, {forwardRef} from 'react';
import {Props, States} from './types';
import styles from './.module.css';

class View extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {id, className, style, ref, children, onClick} = this.props;

    let _className = styles['view'];
    if (className) _className = ` ${className}`;

    return (
      <div
        id={id}
        ref={ref}
        className={_className}
        style={style}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}

const forwardView: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  props,
  ref
) => <View ref={ref} {...props} />;

export default forwardRef<HTMLDivElement, Props>(forwardView);
