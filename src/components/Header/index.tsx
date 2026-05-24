import {getStyles} from '@/utils/helper';

import {Props} from './types';
import styles from './styles.css';

const Header: React.FC<Props> = ({className = '', children, ...rest}) => {
  const headerStyle = getStyles(className, styles['fr-header']);

  return (
    <h1 className={headerStyle} {...rest}>
      {children}
    </h1>
  );
};
export default Header;
