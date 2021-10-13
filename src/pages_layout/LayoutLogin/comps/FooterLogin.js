import React from 'react';
import intl from 'react-intl-universal';
import styles from './FooterLogin.module.css';

function Index() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__div}>
        <a className={styles.website} target="_blank" href="#">
          {intl.get('ABOUT_LINK')}
        </a>
        <span className={styles.divider__span}>|</span>
        <span className={styles.website}>{intl.get('COPYRIGHT')}</span>
      </div>
    </footer>
  );
}

export default Index;
