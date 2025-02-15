import {PureComponent} from 'react';

import {Props, State} from './types';
import styles from './styles.css';

class Popup extends PureComponent<Props, State> {
  render(): React.ReactNode {
    const {title, message, visible} = this.props;

    return (
      visible && (
        <div className={styles['popup']}>
          <div className={styles['title-pane']}>
            {title && <h1>{title}</h1>}
          </div>
          <p>{message}</p>
        </div>
      )
    );
  }
}

export default Popup;
