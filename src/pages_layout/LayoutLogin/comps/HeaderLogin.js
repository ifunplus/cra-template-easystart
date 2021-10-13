import React from 'react';
import { Link } from 'react-router-dom';
import intl from 'react-intl-universal';
import styles from './HeaderLogin.module.css';

function Index({ headerConfig }) {
  return (
    <header className={styles.header}>
      <Link to="/register" className={styles.header__item}>
        {intl.get('REGISTER')}
      </Link>

      <Link to="/login" className={styles.header__item}>
        {intl.get('BACK_TO_LOGIN')}
      </Link>
    </header>
  );
}

Index.propTypes = {};

export default Index;
