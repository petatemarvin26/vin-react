import {PureComponent, ReactNode} from 'react';

import {Touchable} from '@/components';

import {Props, State} from './types';
import styles from './styles.css';

class Dropdown extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render(): ReactNode {
    const renderItem = () => {
      return this.state.data.map((d) => {
        return <div></div>;
      });
    };

    return (
      <div className={styles['dropdown']}>
        <Touchable className={styles['selected']}>Select Item</Touchable>
        <div className={styles['dropdown-list']}>{renderItem()}</div>
      </div>
    );
  }
}

export default Dropdown;
