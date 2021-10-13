const iconfontList = [
  'security',
  'phone',
  'process',
  'entry',
  'question-circle',
  'publish',
  'eye',
  'account'
];

function isIconInIconfont(icon) {
  return iconfontList.indexOf(icon) !== -1;
}

export default isIconInIconfont;
