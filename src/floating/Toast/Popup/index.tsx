import {Header, Text, View} from '@/components';

import {Props} from './types';
import styles from './styles.css';

const Popup: React.FC<Props> = ({title, message}) => {
  return (
    !!message && (
      <View className={styles['fr-popup']}>
        {title && (
          <View className={styles['fr-title']}>
            <Header className={styles['fr-title-txt']}>{title}</Header>
          </View>
        )}
        <Text className={styles['fr-message-txt']}>{message}</Text>
      </View>
    )
  );
};

export default Popup;
