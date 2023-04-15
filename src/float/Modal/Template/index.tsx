import React from 'react';
import ReactDOM from 'react-dom';

import {Props} from './types';
import styles from './.module.css';

class Template extends React.PureComponent<Props> {
  root: HTMLElement;

  constructor(props: Props) {
    super(props);
    this.root = document.getElementById('root');
  }

  render(): React.ReactNode {
    const {root} = this;
    const {children, visible} = this.props;

    if (!visible) return null;

    const ModalTemplate = ReactDOM.createPortal(children, root);

    return <div className={styles['template']}>{ModalTemplate}</div>;
  }
}

export default Template;
