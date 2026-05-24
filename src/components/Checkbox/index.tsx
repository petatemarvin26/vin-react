import {Touchable, Text} from '@/components';
import {CheckBoxSvg, UncheckBoxSvg} from './icons';

import styles from './styles.css';
import {Props} from './types';
import {getStyles} from '@/utils/helper';

const Checkbox: React.FC<Props> = ({
  label,
  disabled = false,
  size = '1rem',
  value,
  onChange
}) => {
  const checkboxStyle = getStyles(
    styles['fr-checkbox'],
    disabled ? styles['disabled'] : ''
  );

  const handleToggle = () => {
    onChange(!value);
  };

  return (
    <Touchable
      className={checkboxStyle}
      style={{fontSize: size}}
      disabled={disabled}
      onClick={handleToggle}
    >
      {value ? (
        <CheckBoxSvg fontSize={size} className={styles['fr-checkbox-svg']} />
      ) : (
        <UncheckBoxSvg fontSize={size} className={styles['fr-checkbox-svg']} />
      )}
      {label && <Text className={styles['fr-checkbox-txt']}>{label}</Text>}
    </Touchable>
  );
};

export default Checkbox;
