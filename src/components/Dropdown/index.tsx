import {PureComponent, ReactNode} from 'react';

import {Item} from '@/common/components';
import {Touchable} from '@/components';

import {Props, State} from './types';
import styles from './styles.css';
import {connectStyle} from '@/hoc';

class Dropdown extends PureComponent<Props, State> {
  ref: HTMLDivElement | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      selected: undefined,
      show: false,
      data: this.props.data || []
    };
  }

  handleClick = () => {
    this.setState((prev) => ({...prev, show: !prev.show}));
  };

  handleSelect = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    selected: State['selected']
  ) => {
    const {onChange} = this.props;

    this.setState((state) => ({...state, selected, show: false}));
    onChange && onChange(selected);
  };

  componentDidMount(): void {
    document.addEventListener('click', (e) => {
      if (!this.ref?.contains(e.target as Node))
        this.setState((prev) => ({...prev, show: false}));
    });
  }

  render(): ReactNode {
    const {handleSelect, handleClick} = this;
    const {selected, show} = this.state;
    const {
      dClassName,
      spClassName,
      sbClassName,
      dlClassName,
      dlcClassName,
      placeholder = 'Select Item...',
      suffixClassName,
      suffixComponent,
      classNames = () => ''
    } = this.props;

    const renderItem = () => {
      return this.state.data
        .filter((d) => d.value !== selected?.value)
        .map((d) => <Item {...d} onClick={(e) => handleSelect(e, d)} />);
    };

    const _dClassName = classNames(['vr-dropdown', dClassName]);
    const _spClassName = classNames(['vr-selected-pane', spClassName]);
    const _sbClassName = classNames(['vr-selected-btn', sbClassName]);
    const _dlClassName = classNames([
      'vr-dropdown-list',
      show ? 's' : 'h',
      dlClassName
    ]);
    const _suffixClassName = classNames(['vr-suffix-pane', suffixClassName]);
    const _dlcClassName = classNames([
      'vr-dropdown-list-container',
      dlcClassName
    ]);

    return (
      <div ref={(ref) => (this.ref = ref)} className={_dClassName}>
        <div className={_spClassName}>
          <Touchable className={_sbClassName} onClick={handleClick}>
            {selected?.label ?? <span>{placeholder}</span>}
          </Touchable>
          {suffixComponent && (
            <div className={_suffixClassName}>{suffixComponent}</div>
          )}
        </div>
        <div className={_dlClassName}>
          <div className={_dlcClassName}>{renderItem()}</div>
        </div>
      </div>
    );
  }
}

export default connectStyle(styles)(Dropdown);
