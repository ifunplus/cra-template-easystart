import Cookies from 'js-cookie';

export function getInitialLang() {
  let lang = Cookies.get('lang');
  const SUPPORT_LOCALES = ['zh-cn', 'en'];

  if (!lang || !SUPPORT_LOCALES.includes(lang)) {
    let naviLang = navigator.languages
      ? navigator.languages[0]
      : navigator.language || navigator.userLanguage;
    naviLang = naviLang.substr(0, 2); // 截取lang前2位字符
    if (naviLang === 'zh') {
      lang = 'zh-cn';
      Cookies.set('lang', 'zh-cn', { expires: 7 });
    } else {
      lang = 'en';
      Cookies.set('lang', 'en', { expires: 7 });
    }
  }

  return lang;
}
