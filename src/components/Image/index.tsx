import React from 'react';

import {Props, States} from './types';

class Image extends React.PureComponent<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {src: ''};
  }

  componentDidMount(): void {
    this.onRequest();
  }

  onRequest = () => {
    const {src, onProgress, onLoadStart, onLoadEnd} = this.props;

    if (onProgress) {
      const request = new XMLHttpRequest();
      request.responseType = 'arraybuffer';
      request.open('GET', src, true);
      request.onprogress = function (e) {
        const loadPercentage = Math.floor((e.loaded / e.total) * 100);
        onProgress && onProgress(loadPercentage);
      };
      request.onloadstart = () => {
        onLoadStart && onLoadStart();
      };
      request.onloadend = () => {
        const blob = new Blob([request.response]);
        const source = window.URL.createObjectURL(blob);
        this.setState({src: source});

        onLoadEnd && onLoadEnd();
      };
      request.send();
      return;
    }
    this.setState({src});
  };

  render(): React.ReactNode {
    const {src} = this.state;
    const {style, className, draggable, onLoad, onDragStart} = this.props;

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
