import React, {ReactNode} from 'react';
import {ClassNames, ConnectStyle} from './types';

const connectStyle: ConnectStyle = (styles) => {
  const isStyle = (style: any) => (style ? style : '');
  const classNames: ClassNames = (...classnames) => {
    let _cnames = '';
    for (const idx in classnames) {
      const arg = classnames[idx];
      if (Array.isArray(arg)) {
        for (let idx in arg) {
          const _name = arg[idx];
          // only accept truthy items
          if (!_name) continue;

          const _style = styles[_name];
          // check if the name is exist in the style
          if (_style) _cnames += ` ${_style}`;
        }
      }
      // this block is conditional approach in the object keyval
      else if (typeof arg === 'object') {
        for (let key in arg) {
          const val = arg[key];
          /**
           * if the value in the key is typeof boolean, if the value is true will get the style
           * using the key, if the value is false will not get the style from the key
           */
          if (typeof val === 'boolean' && val) {
            _cnames += ` ${isStyle(styles[key])}`;
          } 
          /**
           * if the value is typeof string and has truthy value, it will get the style using the value
           */
          else if (typeof val === 'string' && val) {
            _cnames += ` ${isStyle(styles[val])}`;
          }
          /**
           * this mean the value is a style and if the value is undefined by default will get the style using the key
           */
          else if (typeof val === 'undefined') {
            _cnames += ` ${isStyle(styles[key])}`;
          }
        }
      } else _cnames += ` ${isStyle(styles[arg])}`;
    }
    return _cnames.trim();
  };
  return (Component) => {
    type P = React.ComponentProps<typeof Component>;
    return class extends React.PureComponent<P> {
      render(): ReactNode {
        const props = this.props;
        return <Component {...props} classNames={classNames} />;
      }
    };
  };
};

export default connectStyle;
