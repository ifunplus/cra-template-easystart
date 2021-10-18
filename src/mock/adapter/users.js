import faker from 'faker';
import baseAdapter,{getRandomItemFromArray} from '../base'
faker.locale = 'zh_CN';

let fakedata = [];
let stateArr = ['空闲', '任务1', '任务2'];
let roles = [1, 2]; // 1标注 2审核

let i = 0;
while (i < 50) {
  fakedata.push({
    id: i+1,
    account: faker.name.findName(),
    name: faker.name.findName(),
    accountState: getRandomItemFromArray([1, 2, 3, 4]),
    lastOnline: faker.date.recent(),
    gender: getRandomItemFromArray(['male', 'female', 'NA']),
    role: getRandomItemFromArray(roles),
    organization: getRandomItemFromArray(['组织一', '组织二', '组织三']),
    department: getRandomItemFromArray(['部门一', '部门二', '部门三']),
    mobileNumber: faker.phone.phoneNumber(),
    annoNums: 3,
    reviewNums: 5,
    state: getRandomItemFromArray(stateArr),
  });
  i++;
}

export default baseAdapter(fakedata);
