import {PureComponent, ReactNode} from 'react';

import {Props, State} from './types';
import styles from './styles.css';

class Dropdown extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount(): void {
    console.log('HELLO WORLD');
  }

  render(): ReactNode {
    const renderItem = () => {
      return this.state.data.map((d) => {
        return <div></div>;
      });
    };

    return (
      <div className={styles['dropdown']}>
        <div className={styles['selected']}>
          <span>Select Item</span>
        </div>
        <div className={styles['dropdown-list']}>{renderItem()}</div>
      </div>
    );
  }
}

export default Dropdown;
