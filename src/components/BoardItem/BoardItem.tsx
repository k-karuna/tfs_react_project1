import React from 'react';
import cn from 'classnames';
import Money from '../Money/Money';
import styles from './BoardItem.module.css';
import resolveCurrencySymbol from '../../utils/resolveCurrencySymbol';

const BoardItem: React.FC<any> = ({
  type,
  title,
  customTitle,
  amount,
  currency,
}) => {
  return (
    <div className={styles.item}>
      <div className={cn(styles.logo, styles[`logo_${type}`])}>
        {resolveCurrencySymbol(currency)}
      </div>
      <div>
        <div className={styles.title}>{customTitle || title}</div>

        {type && type !== 'external' && (
          <Money value={amount} currency={currency} />
        )}
      </div>
    </div>
  );
};

export default BoardItem;
