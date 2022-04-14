import React from 'react';
import styles from './Button.module.css';

const Button: React.FC<any> = ({ children, onClick, type }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
