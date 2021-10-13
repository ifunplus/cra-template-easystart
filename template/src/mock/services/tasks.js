import { http } from '../http';

let key = 'usersgroup';

export const getAll = () => {
  return http.get('/' + key);
};

export const getItem = (id) => {
  return http.get(`/${key}/${id}`);
};

export const addItem = (data) => {
  return http.post('/' + key, data);
};

export const editItem = (id, data) => {
  return http.put(`/${key}/${id}`, data);
};

export const removeItem = (id) => {
  return http.delete(`/${key}/${id}`);
};

const service = {
  key: key,
  getAll: () => getAll(),
  getItem: () => getItem(),
  addItem: () => addItem(),
  editItem: () => editItem(),
  removeItem: () => removeItem()
};
export default service;
