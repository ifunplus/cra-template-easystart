import { zip } from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { getCurrentLocale } from '../locales';

const localeMapping = {
  zh: 'zh-cn',
  en: 'en'
};

export default function formatTimestamp(timestamp, format = 'YYYY-MM-DD') {
  const date = moment(timestamp);
  const locale = getCurrentLocale();
  return date.locale(localeMapping[locale]).format(format);
}

export function getDisplayDates(dateFrom, dateTo) {
  if (!dateFrom && !dateTo) return [];
  const df = moment(dateFrom.split('|')[0]);
  const dt = moment(dateTo.split('|').pop());
  if (df.isValid()) {
    return [moment(df), moment(dt)];
  }
  return [];
}

export function zipDates(df, dt) {
  return zip(
    df.split('|').map((d) => moment(d)),
    dt.split('|').map((d) => moment(d))
  );
}

export function datesToStrs(dates) {
  return dates.map((d) => d.format('YYYY-MM-DD HH:mm:ss'));
}
