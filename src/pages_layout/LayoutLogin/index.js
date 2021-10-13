/* jshint esversion: 6 */
import React from 'react';
import HeaderLogin from './comps/HeaderLogin';
import FooterLogin from './comps/FooterLogin';
import styles from './index.module.css';

function Index(props) {
  return (
    <div className={styles.layout}>
      <HeaderLogin headerConfig={props.headerConfig} />
      <section className={styles.section}>
        <div className={styles.content}>{props.children}</div>
      </section>
      <FooterLogin />
    </div>
  );
}

export default Index;
