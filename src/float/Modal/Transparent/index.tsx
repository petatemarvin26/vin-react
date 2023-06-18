import React, {createRef} from 'react';

import {Props} from './types';
import styles from './.module.css';

class Transparent extends React.PureComponent<Props> {
  root: HTMLElement;
  ref: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.root = document.getElementById(props.portalTo);
    this.ref = createRef<HTMLDivElement>();
    this.handleClick.bind(this);
  }

  componentDidMount(): void {
    document.addEventListener('mousedown', this.handleClick);
  }
  componentWillUnmount(): void {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = (event: MouseEvent) => {
    const {onClose} = this.props;
    if ((event.target as Node).isEqualNode(this.ref.current)) {
      const close = onClose ?? (() => {});
      close();
    }
  };

  render(): React.ReactNode {
    const {ref} = this;
    const {children, visible} = this.props;

    if (!visible) return null;

    return (
      <div ref={ref} className={styles['template']} autoFocus={true}>
        {children}
      </div>
    );
  }
}
// const Transparent = forwardRef<Controller, Props>((props, ref) => (
//   <Controller ref={ref} {...props} />
// ));

// export {Controller};
export default Transparent;
