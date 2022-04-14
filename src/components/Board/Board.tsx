import React from 'react';

import BoardItem from '../BoardItem/BoardItem';

import styles from './Board.module.css';

const types = ['debit', 'credit', 'external', 'saving', 'loan'];
const currencies = ['RUB', 'USD', 'EUR', 'GBP'];

const Board: React.FC<any> = ({ accounts }) => {
  return (
    <div className={styles.board}>
      {[...accounts]
        .sort((acc1, acc2) => {
          const typeCompare =
            types.indexOf(acc1.type) - types.indexOf(acc2.type);
          if (typeCompare !== 0) {
            return typeCompare;
          } else {
            return (
              currencies.indexOf(acc1.currency) -
              currencies.indexOf(acc2.currency)
            );
          }
        })
        .map((account) => {
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

export default Board;
