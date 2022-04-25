import React from 'react';

import BoardItem from '../BoardItem/BoardItem';

import styles from './Board.module.css';

enum CardType {
  debit,
  credit,
  external,
  saving,
  loan,
}

enum CurrencyType {
  RUB,
  USD,
  EUR,
  GBP,
}

const Board: React.FC<any> = ({ accounts }) => {
  const sortedAccounts = [...accounts].sort((acc1, acc2) => {
    if (acc1.type === acc2.type) {
      return (
        Object.keys(CurrencyType).indexOf(acc1.currency) -
        Object.keys(CurrencyType).indexOf(acc2.currency)
      );
    }
    return (
      Object.keys(CardType).indexOf(acc1.type) -
      Object.keys(CardType).indexOf(acc2.type)
    );
  });
  return (
    <div className={styles.board}>
      {sortedAccounts.map((account) => {
        return (
          <BoardItem
            key={account.id}
            title={account.title}
            type={account.type}
            customTitle={account.customTitle}
            amount={account.amount}
            currency={account.currency}
          />
        );
      })}
    </div>
  );
};

export default React.memo(Board);
