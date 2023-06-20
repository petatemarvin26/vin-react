import {PureComponent, ReactNode} from 'react';

import styles from './.module.css';
import {Props, State} from './types';

class CircleSnail extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const {size, thickness} = props;

    const PI = 3.1416;
    const SIZE = `calc(${size} + ${thickness} + 2px)`; // 2px is allowance of circle box size
    const RADIUS = `calc(${size} * 0.5)`;
    const POS = `calc(${SIZE} * 0.5)`;
    const CIRCUMFERENCE = `calc(2 * ${PI} * ${RADIUS})`;

    this.state = {
      PI,
      SIZE,
      RADIUS,
      POS,
      CIRCUMFERENCE
    };
  }

  onAnchorChange(progress: number) {
    return `calc((${this.state.CIRCUMFERENCE} * (-${progress}/100)) - ${this.state.CIRCUMFERENCE})`;
  }

  componentDidMount() {
    const {CIRCUMFERENCE} = this.state;
    document.documentElement.style.setProperty(
      '--CIRCLE-SNAIL-ANCHOR-WIDTH',
      `calc(${CIRCUMFERENCE} * 1)`
    );
  }

  render(): ReactNode {
    const {style, progress, thickness, color, anchorStyle} = this.props;
    const {SIZE, POS, RADIUS, CIRCUMFERENCE} = this.state;

    return (
      <svg
        id='circleSnail'
        width={SIZE}
        height={SIZE}
        fill='transparent'
        style={style}
      >
        <circle
          cx={POS}
          cy={POS}
          r={RADIUS}
          stroke={'rgba(0, 0, 0, 0.15)'}
          strokeWidth={thickness}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={0}
        />
        <circle
          cx={POS}
          cy={POS}
          r={RADIUS}
          stroke={color || 'var(--ACCENT-COLOR)'}
          strokeWidth={thickness}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={this.onAnchorChange(
            typeof progress === 'number' ? progress : 25
          )}
          strokeLinecap={anchorStyle ? anchorStyle : 'inherit'}
          className={styles.red}
        />
      </svg>
    );
  }
}

export default CircleSnail;
