import React from 'react';
import { NavLink } from 'react-router-dom';
import BoardItem from '../BoardItem/BoardItem';
import { compareAccounts } from '../../utils/accounts';
import styles from './Board.module.css';

// enum CardType {
//   debit,
//   credit,
//   external,
//   saving,
//   loan,
// }

// enum CurrencyType {
//   RUB,
//   USD,
//   EUR,
//   GBP,
// }

const Board: React.FC<any> = ({ accounts }) => {
  if (!accounts) {
    return null;
  }

  const sortedAccounts = accounts.slice().sort(compareAccounts);
  return (
    <div className={styles.board}>
      {sortedAccounts.map((account) => (
        <NavLink
          key={account.id}
          to={`/account/${account.id}`}
          className={styles.link}
          activeClassName={styles.activeItem}
        >
          <BoardItem {...account} />
        </NavLink>
      ))}
      <NavLink
        to="/actions/add_card"
        className={styles.link}
        activeClassName={styles.activeItem}
      >
        <div className={styles.actionItem}>Привязать карту</div>
      </NavLink>
    </div>
  );
};

export default React.memo(Board);
