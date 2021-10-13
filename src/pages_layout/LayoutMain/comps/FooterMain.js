import React from 'react';
import { Layout } from 'antd';
import intl from 'react-intl-universal';
import styles from './FooterMain.module.css';

const { Footer } = Layout;

function FooterMain() {
  return <Footer className={styles.footer}>{intl.get('COPYRIGHT')}</Footer>;
}

export default FooterMain;
