import { indexOf } from 'lodash';

const iconfontList = [
  security,
  phone,
  process,
  entry,
  question-circle,
  publish,
  add-circle,
  eye,
  account,
  page,
  setting,
  save,
  manage,
  use-note,
  help-note,
  team
];

function isIconInIconfont(icon) {
  return indexOf(iconfontList, icon) !== -1;
}

export default isIconInIconfont;
