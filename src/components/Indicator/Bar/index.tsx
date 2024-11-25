import {PureComponent, ReactNode} from 'react';

import {connectStyle} from '@/hoc';

import {Props} from './types';
import styles from './styles.css';

class Bar extends PureComponent<Props> {
  ref: SVGElement | null = null;
  COLOR = 'purple';
  PROGRESS = 1;
  SPEED = 1;

  componentDidMount(): void {
    const {
      progress = this.PROGRESS,
      speed = this.SPEED,
      height,
      cornerStyle = 'square'
    } = this.props;

    this.ref?.style.setProperty(
      '--BAR-ANCHOR-WIDTH',
      `calc(${this.props.width * progress}px)`
    );
    speed && this.ref?.style.setProperty('--BAR-ANCHOR-SPEED', `${speed}s`);
    cornerStyle == 'round' &&
      this.ref?.style.setProperty('--BAR-ROUND', `${height * 0.5}px`);
  }

  anchorChange = (progress: number) => {
    return this.props.width * progress;
  };

  render(): ReactNode {
    const {COLOR, PROGRESS} = this;
    const {
      width,
      height,
      color = COLOR,
      animating = false,
      progress = PROGRESS,
      cornerStyle = 'square',
      className,
      classNameBg,
      classNameAnc,
      classNames = () => ''
    } = this.props;

    const barStyle = classNames(['vr-bar-indicator', className]);
    const barBgStyle = classNames(['vr-bar-indicator-bg', classNameBg]);
    const barAncStyle = classNames(['vr-bar-indicator-anc', classNameAnc], {
      moving: animating
    });

    return (
      <svg
        ref={(ref) => (this.ref = ref)}
        className={barStyle}
        width={width}
        height={height}
      >
        <rect
          className={barBgStyle}
          width={width}
          height={height}
          fill='rgba(0, 0, 0, 0.15)'
        />
        <rect
          className={barAncStyle}
          height={height}
          fill={color}
          width={this.anchorChange(progress)}
          rx={cornerStyle === 'square' ? 0 : height * 0.5}
          ry={cornerStyle === 'square' ? 0 : height * 0.5}
        />
      </svg>
    );
  }
}

export default connectStyle(styles)(Bar);
