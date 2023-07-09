import React from 'react';

import {Props, States} from './types';

class Image extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {src, style, className, draggable, onLoad, onDragStart} =
      this.props;

    return (
      <img
        src={src}
        className={className}
        style={style}
        alt={className}
        onLoad={onLoad}
        onDragStart={onDragStart}
        draggable={draggable}
      />
    );
  }
}

export default Image;
