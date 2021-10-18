import { http } from '../mock/http';

//login
export function login(data) {
  return http.post('/account/login', data);
}
export function fetchUser(account) {
  return http.get(`/account/${account}`);
}

//countries
export const mock_getCountries = () => {
  return http.get('/countries');
};

export const mock_getCountry = (id) => {
  return http.get(`/countries/${id}`);
};

export const mock_createCountry = (data) => {
  return http.post('/countries', data);
};

export const mock_updateCountry = (id, data) => {
  return http.put(`/countries/${id}`, data);
};

export const mock_delCountry = (id) => {
  return http.delete(`/countries/${id}`);
};


//users
export const mock_getUsers = () => {
  return http.get('/users');
};

export const mock_getUser = (id) => {
  return http.get(`/users/${id}`);
};

export const mock_createUser = (data) => {
  return http.post('/users', data);
};

export const mock_updateUser = (id, data) => {
  return http.put(`/users/${id}`, data);
};

export const mock_delUser = (id) => {
  return http.delete(`/users/${id}`);
};

