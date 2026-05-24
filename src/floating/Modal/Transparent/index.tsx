import {useEffect, useRef} from 'react';

import {View} from '@/components';

import {Props} from './types';
import styles from './styles.css';

const Transparent: React.FC<Props> = ({component, onClose}) => {
  const transparent = useRef<HTMLDivElement>(null);

  const handleInit = () => {
    const handleClick = (ev: MouseEvent) => {
      if ((ev.target as Node).isEqualNode(transparent.current)) {
        const close = onClose ?? (() => {});
        close();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  };
  useEffect(handleInit, []);

  if (!component) return null;
  return (
    <View ref={transparent} className={styles['fr-transparent']} autoFocus>
      <View className={styles['fr-modal']}>{component}</View>
    </View>
  );
};

export default Transparent;
