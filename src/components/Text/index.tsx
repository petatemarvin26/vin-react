import {getStyles} from '@/utils/helper';

import {Props} from './types';
import styles from './styles.css';

const Text: React.FC<Props> = ({className = '', children, ...rest}) => {
  const textStyle = getStyles(className, styles['fr-text']);

  return (
    <p className={textStyle} {...rest}>
      {children}
    </p>
  );
};
export default Text;
