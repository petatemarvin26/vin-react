import {Touchable, View} from '@/components';

import {Props} from './types';
import styles from './styles.css';
import {useState} from 'react';

const Pagination: React.FC<Props> = ({
  totalPages,
  maxDisplay = 3,
  fontSize = '1rem'
}) => {
  const [start, setStart] = useState(1);
  const handleClick = (num: number) => {
    if (num >= totalPages || num <= 1) return;
    if (num === start + (maxDisplay - 1)) setStart((prev) => prev + 1);
    else if (num === start) setStart((prev) => prev - 1);
  };

  const renderDisplay = Array.from({length: maxDisplay}).map((_, idx) => {
    const size = `calc(${fontSize} * 1.75)`;
    const num = idx + start;
    return (
      <Touchable
        className={styles['fr-page']}
        onClick={() => handleClick(num)}
        style={{fontSize, width: size, height: size}}
      >
        {num}
      </Touchable>
    );
  });

  return <View className={styles['fr-pagination']}>{renderDisplay}</View>;
};
export default Pagination;
