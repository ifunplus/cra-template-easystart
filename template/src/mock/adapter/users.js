import faker from 'faker';
faker.locale = 'zh_CN';

let fakedata = [];
let stateArr = ['空闲', '任务1', '任务2'];
let roles = [1, 2]; // 1标注 2审核
function getRandomItemFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
let i = 50;
while (i > 0) {
  fakedata.push({
    id: i,
    account: faker.name.findName(),
    name: faker.name.findName(),
    accountState: getRandomItemFromArray([1, 2, 3, 4]),
    lastOnline: faker.date.recent(),
    gender: getRandomItemFromArray(['male', 'female', 'NA']),
    role: getRandomItemFromArray(roles),
    organization: getRandomItemFromArray(['医院1', '医院2', '医院3']),
    department: getRandomItemFromArray(['病理科', '妇科1', '妇科2']),
    mobileNumber: faker.phone.phoneNumber(),
    annoNums: 3,
    reviewNums: 5,
    state: getRandomItemFromArray(stateArr)
  });
  i--;
}

// get list
export const getAll = () => {
  return [200, fakedata];
};

const extractIdPathParamFromUrl = (config) => {
  return config.url.split('/').pop();
};

// single get
const getItem = (config) => {
  const id = extractIdPathParamFromUrl(config);
  const country = fakedata.find((c) => c.id === id);
  return [200, country];
};
// single add
const addItem = (config) => {
  const country = JSON.parse(config.data);
  fakedata.push(country);
  return [200, country];
};
// single update
const editItem = (config) => {
  const id = extractIdPathParamFromUrl(config);
  const countryIndex = fakedata.findIndex((c) => c.id === id);
  const country = JSON.parse(config.data);
  fakedata[countryIndex] = country;
  return [200, country];
};
// single delete
const removeItem = (config) => {
  const id = extractIdPathParamFromUrl(config);
  fakedata = fakedata.filter((c) => c.id !== id);
  return [204, null];
};

const adapter = {
  getAll: () => getAll(),
  getItem: () => getItem(),
  addItem: () => addItem(),
  editItem: () => editItem(),
  removeItem: () => removeItem()
};
export default adapter;
