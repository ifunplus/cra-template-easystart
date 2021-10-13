import MockAdapter from 'axios-mock-adapter';

import { default as countries } from './adapter/countries';
import { default as users } from './adapter/users';
import { default as usersgroup } from './adapter/usersgroup';
import { default as tasks } from './adapter/tasks';
import { default as labels } from './adapter/labels';
// 匹配前缀不要相同，按照顺序：usersgroup,users
const keys = { countries, usersgroup, users, tasks, labels };

export const isMockEnabled = () => {
  return process.env.REACT_APP_MOCK_ENABLED === 'true';
};

export const initializeAxiosMockAdapter = (instance) => {
  const mock = new MockAdapter(instance);
  Object.keys(keys).forEach((key) => {
    mock.onGet('/' + key).reply(() => {
      return keys[key].getAll();
    });

    const usersUri = '/' + key;
    const url = new RegExp(`${usersUri}/*`);
    mock.onGet(url).reply((config) => keys[key].getItem(config));
  });

  // mock.onGet("/users").reply(() => users.getAll());
  // mock.onGet(/\/users\/\d+/).reply(config => users.getItem(config));
};
