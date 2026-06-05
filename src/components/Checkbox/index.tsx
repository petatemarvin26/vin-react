import {Touchable, Text} from '@/components';
import {CheckBoxSvg, UncheckBoxSvg} from './icons';

import styles from './styles.css';
import {Props} from './types';
import {getStyles} from '@/utils/helper';

const Checkbox: React.FC<Props> = ({
  className,
  label,
  disabled = false,
  size = '1rem',
  color = '#000',
  value,
  onChange
}) => {
  const checkboxStyle = getStyles(
    className,
    styles['fr-checkbox'],
    disabled && styles['disabled']
  );

  const svgProps = {
    fontSize: size,
    className: styles['fr-checkbox-svg']
  };

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
      {value ? <CheckBoxSvg {...svgProps} /> : <UncheckBoxSvg {...svgProps} />}
      {label && <Text className={styles['fr-checkbox-txt']}>{label}</Text>}
    </Touchable>
  );
};

export default Checkbox;
