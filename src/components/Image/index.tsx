import React from 'react';

import {Props, States} from './types';

class Image extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {source, style, className, onLoad} = this.props;

    return (
      <img
        src={source}
        className={className}
        style={style}
        alt={className}
        onLoad={onLoad}
      />
    );
  }
}

export default Image;
