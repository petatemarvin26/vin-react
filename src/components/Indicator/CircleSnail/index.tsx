import {PureComponent, ReactNode} from 'react';

import {connectStyle} from '@/hoc';

import styles from './.module.css';
import {Props, State} from './types';

class CircleSnail extends PureComponent<Props, State> {
  ref: SVGElement | null = null;
  COLOR = 'purple';
  PROGRESS = 0.5;
  PI = 3.1416;
  SIZE = 0;
  RADIUS = 0;
  POS = 0;
  CIRCUMFERENCE = 0;
  SPEED = 1;

  constructor(props: Props) {
    super(props);

    const {size, thickness} = props;

    this.PI = 3.1416;
    this.SIZE = size + thickness + 2;
    this.RADIUS = size * 0.5;
    this.POS = this.SIZE * 0.5;
    this.CIRCUMFERENCE = 2 * this.PI * this.RADIUS;
  }

  componentDidMount() {
    const {progress = this.PROGRESS, speed = this.SPEED} = this.props;
    this.ref?.style.setProperty(
      '--CIRCLE-ANCHOR-WIDTH',
      `calc(${this.CIRCUMFERENCE * -progress}px)`
    );
    speed && this.ref?.style.setProperty('--CIRCLE-ANCHOR-SPEED', `${speed}s`);
  }

  anchorChange = (progress: number) => {
    return this.CIRCUMFERENCE * -progress - this.CIRCUMFERENCE;
  };

  render(): ReactNode {
    const {SIZE, POS, RADIUS, CIRCUMFERENCE, PROGRESS, COLOR, anchorChange} =
      this;
    const {
      animating = false,
      progress = PROGRESS,
      thickness,
      color = COLOR,
      cornerStyle = 'round',
      className,
      classNameBg,
      classNameAnc,
      classNames = () => ''
    } = this.props;

    const circleStyle = classNames(['vr-circle-indicator', className], {
      rotating: animating
    });
    const circleBgStyle = classNames(['vr-circle-bg', classNameBg]);
    const circleAncStyle = classNames(
      ['vr-circle-indicator-anc', classNameAnc],
      {effects: animating}
    );

    return (
      <svg
        ref={(ref) => (this.ref = ref)}
        className={circleStyle}
        width={SIZE}
        height={SIZE}
        fill='transparent'
      >
        <circle
          cx={POS}
          cy={POS}
          r={RADIUS}
          className={circleBgStyle}
          stroke={'rgba(0, 0, 0, 0.15)'}
          strokeWidth={thickness}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={0}
        />
        <circle
          cx={POS}
          cy={POS}
          r={RADIUS}
          className={circleAncStyle}
          stroke={color || 'var(--ACCENT-COLOR)'}
          strokeWidth={thickness}
          strokeDasharray={CIRCUMFERENCE}
          strokeLinecap={cornerStyle}
          strokeDashoffset={anchorChange(progress)}
          // {...(progress ? {strokeDashoffset: anchorChange(progress)} : {})}
        />
      </svg>
    );
  }
}

export default connectStyle(styles)(CircleSnail);
