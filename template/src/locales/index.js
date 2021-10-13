import Cookies from 'js-cookie';
import intl from 'react-intl-universal';
import en from './en';
import zh from './zh';

const locales = { zh, en };

function getCurrentLocale() {
  const lang = intl.determineLocale({ cookieLocaleKey: 'lang' });
  return lang.split('-')[0];
}

function initLanguage() {
  const lang = getCurrentLocale();
  Cookies.set('lang', lang);
  intl.init({ currentLocale: lang, locales });
}

function switchLanguage(language = '') {
  if (language && Object.prototype.hasOwnProperty.call(locales, language)) {
    intl.options.currentLocale = language;
  } else {
    const lang = intl.determineLocale({ cookieLocaleKey: 'lang' });
    intl.options.currentLocale = lang === 'zh' ? 'en' : 'zh';
    Cookies.set('lang', intl.options.currentLocale);
  }
}

export { initLanguage, switchLanguage, getCurrentLocale };
