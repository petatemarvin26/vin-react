import {View} from '@/components';
import {getStyles} from '@/utils/helper';

import {Props} from './types';
import styles from './styles.css';

const InputText: React.FC<Props> = ({
  className,
  disabled,
  prefixComponent,
  suffixComponent,
  placeholder,
  onChangeText
}) => {
  const inputViewStyle = getStyles(
    className,
    styles['fr-input-view'],
    disabled ? styles['fr-input-disabled'] : ''
  );
  const inputStyle = getStyles(styles['fr-input']);

  return (
    <View className={inputViewStyle}>
      {prefixComponent}
      <input
        name={placeholder}
        className={inputStyle}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChangeText(e.target.value)}
      />
      {suffixComponent}
    </View>
  );
};

export default InputText;
