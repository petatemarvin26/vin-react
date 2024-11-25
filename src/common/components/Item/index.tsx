import {PureComponent, ReactNode} from 'react';

import styles from './styles.css';
import {Props} from './types';
import {Touchable} from '@/components';

class Item extends PureComponent<Props> {
  render(): ReactNode {
    const {label, onClick} = this.props;

    return (
      <Touchable className={styles['vr-item']} onClick={onClick}>
        {label}
      </Touchable>
    );
  }
}
export default Item;
