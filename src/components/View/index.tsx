import {getStyles} from '@/utils/helper';

import {Props} from './types';
import styles from './styles.css';

const View: React.FC<Props> = ({className = '', children, ref, ...rest}) => {
  const viewStyle = getStyles(className, styles['fr-view']);

  return (
    <div ref={ref} className={viewStyle} {...rest}>
      {children}
    </div>
  );
};
export default View;
