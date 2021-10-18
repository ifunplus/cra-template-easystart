import request from '.';

// auth
export function login(data) {
  return request('/account/login', { method: 'POST', data });
}
export function fetchUser(account) {
  return request(`/account/${account}`, { method: 'GET' });
}

// 标签管理
// export function apiFetchTags() {
//   return request('/tag', { method: 'GET' });
// }
// export function apiCreateTag(tag) {
//   return request('/tag', { method: 'POST', data: tag });
// }
// export function apiUpdateTag(tagId, tag) {
//   return request(`/tag/${tagId}`, { method: 'POST', data: tag });
// }
// export function apiDeleteTag(tagId) {
//   return request(`/tag/${tagId}`, { method: 'DELETE' });
// }
// export function apiFetchTag(tagId) {
//   return request(`/tag/${tagId}`, { method: 'GET' });
// }