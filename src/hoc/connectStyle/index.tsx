import React, {ReactNode} from 'react';
import {ClassNames, ConnectStyle} from './types';

const connectStyle: ConnectStyle = (styles) => {
  const classNames: ClassNames = (cnames) => {
    let _cnames = '';
    for (let x in cnames) {
      const _name = cnames[x];
      const _style = styles[_name];

      if (_style) _cnames += ` ${_style}`;
      if (!_style && _name) _cnames += ` ${_name}`;
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
