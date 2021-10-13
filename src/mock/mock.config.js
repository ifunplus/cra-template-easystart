import MockAdapter from 'axios-mock-adapter';

import { default as countries } from './adapter/countries';
import { default as users } from './adapter/users';

// 匹配前缀不要相同，按照顺序：usersgroup,users
const keys = { countries, users};

export const isMockEnabled = () => {
  return process.env.REACT_APP_MOCK_ENABLED === 'true';
};

export const initializeAxiosMockAdapter = (instance) => {
  const mock = new MockAdapter(instance);

  //统一按规律mock
  Object.keys(keys).forEach((key) => {
    let itemUrl = new RegExp(`/${key}/*`)

    mock.onGet('/' + key).reply(() => keys[key].getAll());  //getList success
    mock.onGet(itemUrl).reply((config) => keys[key].getItem(config)); //getItemInList

    mock.onPost(itemUrl).reply((config) => keys[key].updateItem(config));//updateItem success
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