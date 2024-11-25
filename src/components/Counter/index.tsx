import {PureComponent, ReactNode} from 'react';
import {connectStyle} from '@/hoc';
import {Touchable} from '@/components';

import {Props} from './types';
import {DownIcon, UpIcon} from './icons';
import styles from './.module.css';

class Counter extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleChange = (numericand: number) => () => {
    const {min = 0, max = 0, value = 0, onChange} = this.props;
    const next = value + numericand;

    if (next < min) return;
    if (max) if (next > max) return;

    onChange && onChange(next);
  };

  render(): ReactNode {
    const {handleChange} = this;
    const {
      className,
      value = 0,
      classNameButton,
      classNameIcon,
      classNameNumber,
      classNames = () => ''
    } = this.props;

    const counterStyle = classNames(['vr-counter', className]);
    const btnActionStyle = classNames(['vr-btn-action', classNameButton]);
    const iconStyle = classNames(['vr-icon', classNameIcon]);
    const numberStyle = classNames(['vr-number', classNameNumber]);

    return (
      <div className={counterStyle}>
        <Touchable className={btnActionStyle} onClick={handleChange(1)}>
          <UpIcon className={iconStyle} />
        </Touchable>
        <p className={numberStyle}>{value}</p>
        <Touchable className={btnActionStyle} onClick={handleChange(-1)}>
          <DownIcon className={iconStyle} />
        </Touchable>
      </div>
    );
  }
}

export default connectStyle(styles)(Counter);
