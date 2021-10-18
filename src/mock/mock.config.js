import MockAdapter from 'axios-mock-adapter';
import {extractIdPathParamFromUrl} from './base'
import { default as countries } from './adapter/countries';
import { default as users } from './adapter/users';
import { fakedata as accounts } from './adapter/accounts';
// 匹配前缀不要相同，按照顺序：usersgroup,users
const keys = { countries, users };

export const isMockEnabled = () => {
  return process.env.REACT_APP_MOCK_ENABLED === 'true';
};

export const initializeAxiosMockAdapter = (instance) => {
  const mock = new MockAdapter(instance, { delayResponse: 200 });

  // mock success request  模拟成功请求
  mock.onGet('/success').reply(200, {
    msg: 'success'
  });
  // mock error request  模拟失败请求
  mock.onGet('/error').reply(500, {
    msg: 'failure'
  });

  //模拟登录接口
  mock.onPost('/account/login').reply((config) => {
    console.log('**********',config)
    // 解析axios传过来的数据
    let { account, password } = JSON.parse(config.data);
    let user = null;
    // 判断模拟的假数据中是否有和传过来的数据匹配的
    let hasUser = accounts.some((person) => {
      // 如果存在这样的数据
      if (person.account === account && person.password === password) {
        user = JSON.parse(JSON.stringify(person));
        user.password = undefined;
        return true;
      } else {
        return false;
      }
    });
    console.log('**********',hasUser)
    if (hasUser) {
      // 如果有那么一个人
      return [200, { code: 200, msg: '登录成功', data:user }];
    } else {
      // 如果没有这么一个人
      return [200, { code: 500, msg: '账号错误' }];
    }
  });

  mock.onGet(new RegExp(`/account/*`)).reply((config) => {
    const account = extractIdPathParamFromUrl(config);
    const index = accounts.findIndex((c) => c.account === account);
    if(index>-1){
      let res = accounts[index] 
      delete res.password;
      return [
        200,
        { code: 200, msg: '登录成功', data:res}
      ]
    }else{
      return [
        200,
        { code: 500, msg: '异常'}
      ]
    }
  });
  //统一按规律mock
  Object.keys(keys).forEach((key) => {
    let itemUrl = new RegExp(`/${key}/*`);

    mock.onGet('/' + key).reply(() => keys[key].getAll()); //getList success
    mock.onGet(itemUrl).reply((config) => keys[key].getItem(config)); //getItemInList

    mock.onPost(itemUrl).reply((config) => keys[key].updateItem(config)); //updateItem success
    mock.onPut(itemUrl).reply((config) => keys[key].createItem(config)); //createItem success
    mock.onDelete(itemUrl).reply(200); //delItem success

    //mock.onGet('/' + key).networkError(); //getList networkError
    //mock.onGet('/' + key).timeout(); //getList timeout
    //mock.onPost(itemUrl).reply(500);//updateItemInList 500 error
  });

  // 单个单个mock
  // mock.onGet("/users").reply(() => users.getAll());
  // mock.onGet(/\/users\/\d+/).reply(config => users.getItem(config));
};

//https://nicedoc.io/ctimmerm/axios-mock-adapter
