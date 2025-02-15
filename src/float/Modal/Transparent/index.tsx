import {PureComponent, ReactNode, RefObject, createRef} from 'react';

import {Props} from './types';
import styles from './styles.css';

class Transparent extends PureComponent<Props> {
  root: HTMLElement;
  ref: RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.root = this.props.root;
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

  render(): ReactNode {
    const {ref} = this;
    const {children, visible} = this.props;

    if (!visible) return null;

    return (
      <div ref={ref} className={styles['transparent']} autoFocus={true}>
        {children}
      </div>
    );
  }
}
export default Transparent;
