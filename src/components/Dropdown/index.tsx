import React, {useEffect, useState} from 'react';
import {Touchable, View} from '@/components';

import {HandleSelect, Props} from './types';
import styles from './styles.css';
import {getStyles} from '@/utils/helper';
import {ArrowDownSvg, ArrowLeftSvg} from './icons';

const Dropdown: React.FC<Props> = ({
  items,
  selected,
  className,
  selectedClassName,
  listClassName,
  containerClassName,
  itemsClassName,
  onSelect
}) => {
  const dropdown = React.useRef<HTMLDivElement>(null);
  const [top, setTop] = useState<string>();
  const [show, setShow] = useState<boolean>(false);

  const dropdownStyle = getStyles(className, styles['fr-dropdown']);
  const anchorStyle = getStyles(
    selectedClassName,
    styles['fr-dropdown-anchor']
  );
  const listStyle = getStyles(listClassName, styles['fr-dropdown-list']);
  const containerStyle = getStyles(
    containerClassName,
    styles['fr-dropdown-container']
  );
  const itemsStyle = getStyles(itemsClassName, styles['fr-dropdown-item']);

  const handleSelectItem: HandleSelect = (selected) => {
    onSelect(selected);
    setShow(false);
  };

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  const renderItems = items
    .filter(({value}) => value !== selected.value)
    .map((data, idx) => (
      <Touchable
        key={idx}
        className={itemsStyle}
        onClick={() => handleSelectItem(data)}
      >
        {data.label}
      </Touchable>
    ));

  const handleInit = () => {
    const height = dropdown.current?.getClientRects().item(0)?.height;
    if (height) setTop(`${height + 1}px`);
  };
  useEffect(handleInit, []);

  return (
    <View ref={dropdown} className={dropdownStyle}>
      <Touchable className={anchorStyle} onClick={handleClick}>
        {selected.label}
        {show ? (
          <ArrowDownSvg className={styles['dropdown-icon']} />
        ) : (
          <ArrowLeftSvg className={styles['dropdown-icon']} />
        )}
      </Touchable>
      {show && (
        <View className={listStyle} style={{top}}>
          <View className={containerStyle}>{renderItems}</View>
        </View>
      )}
    </View>
  );
};

export default Dropdown;
