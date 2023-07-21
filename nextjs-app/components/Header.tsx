import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Welcome to our Next.js App</h1>
      <p className={styles.description}>Build a modern web application using the Next.js framework</p>
    </header>
  );
};

export default Header;