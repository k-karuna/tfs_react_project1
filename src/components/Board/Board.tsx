import React from "react";
import { NavLink } from "react-router-dom";
import BoardItem from "../BoardItem/BoardItem";
import { compareAccounts } from "../../utils/accounts";
import styles from "./Board.module.css";

const Board: React.FC<any> = ({ accounts }) => {
  const sortedAccounts = accounts?.slice().sort(compareAccounts);
  return (
    <div className={styles.board}>
      {sortedAccounts?.map((account) => (
        <NavLink
          key={account.id}
          to={`/account/${account.id}`}
          className={({ isActive }) =>
            isActive ? styles.activeItem : styles.link
          }
        >
          <BoardItem {...account} />
        </NavLink>
      ))}
      <NavLink to="/actions/add_card" className={styles.link}>
        <div className={styles.actionItem}>Привязать карту</div>
      </NavLink>
    </div>
  );
};

export default React.memo(Board);
