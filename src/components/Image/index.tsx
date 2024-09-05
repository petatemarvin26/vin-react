import {PureComponent, ReactNode} from 'react';

import {Props, States} from './types';

class Image extends PureComponent<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {src: ''};
  }

  componentDidMount(): void {
    const {src, onLoading, onLoadInit, onLoadDone} = this.props;
    if (onLoading || onLoadInit || onLoadDone) {
      this.renderImage(src);
      return;
    }
    this.setState({src});
  }

  renderImage = (src: string) => {
    const {onLoading, onLoadInit, onLoadDone} = this.props;
    const request = new XMLHttpRequest();
    request.responseType = 'arraybuffer';
    request.open('GET', src, true);
    request.onprogress = function (e) {
      const loadPercentage = Math.floor((e.loaded / e.total) * 100);
      onLoading && onLoading(loadPercentage);
    };
    request.onloadstart = () => {
      onLoadInit && onLoadInit();
    };
    request.onloadend = () => {
      const blob = new Blob([request.response]);
      const source = window.URL.createObjectURL(blob);
      this.setState({src: source});

      onLoadDone && onLoadDone();
    };
    request.send();
  };

  render(): ReactNode {
    const {src} = this.state;
    const {style, className, ...rest} = this.props;

    return <img {...rest} src={src} className={className} />;
  }
}

export default Image;
