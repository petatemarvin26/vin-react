import {getStyles} from '@/utils/helper';

import {Props} from './types';
import styles from './styles.css';

const Touchable: React.FC<Props> = ({
  className = '',
  disabled,
  children,
  ...rest
}) => {
  const touchableStyle = getStyles(
    className,
    styles['fr-touchable'],
    disabled && styles['fr-touchable-disabled']
  );

  return (
    <button className={touchableStyle} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
export default Touchable;
