import request from '.';

// auth
export function login(data) {
  return request('/user/login', { method: 'POST', data });
}
export function fetchUserMe() {
  return request('/user/me', { method: 'GET' });
}
export function apiUpdateMinePwd(data) {
  return request('/user/pwd', { method: 'POST', data });
}

export function loadImageVisualInfoFromServer(imageId) {
  return request(`/image/load/${imageId}`, {
    method: 'GET'
  });
}
export function apiAllocateImage(groupId) {
  return request(`/task/allocate/${groupId}`, {
    method: 'GET'
  });
}

export function apiAbandonTask(taskId, payload) {
  return request(`/task/abandon/${taskId}`, {
    method: 'PUT',
    data: payload
  });
}

export function apiReturnTask(taskId) {
  return request(`/task/return/${taskId}`, {
    method: 'GET'
  });
}

export function apiCommitTask(taskId, data) {
  return request(`/task/commit/${taskId}`, {
    method: 'PUT',
    data
  });
}

//  标注数据接口
export function apiUpdateROI(taskId, data) { return request(`/roi/${taskId}`, { method: 'POST', data }) }
export function apiRemoveROI(roiId) { return request(`/roi/${roiId}`, { method: 'DELETE' }) }
export function apiRemoveAnno(annoId) { return request(`/anno/${annoId}`, { method: 'DELETE' }) }
export function apiUpdateAnno(data) { return request(`/anno`, { method: 'POST', data }) }
export function apiGetROIAndAnnos(taskId) { return request(`/roi/${taskId}`, { method: 'GET' }) }


// 图像列表
export function getCounting(conditions) {
  return request('/image/count', { method: 'GET', params: conditions });
}
export function getImages(conditions) {
  return request('/image', { method: 'GET', params: conditions });
}

// tabs
export function apiSaveATab(tab) {
  return request(`/user/tab`, { method: 'POST', data: tab });
}
export function apiFetchTabs() {
  return request(`/user/tab`, { method: 'GET' });
}
export function apiDeleteTab(tabId) {
  return request(`/user/tab/${tabId}`, { method: 'DELETE' });
}

// 用户管理
export function createGroup(payload) {
  return request('/group', { method: 'POST', data: payload });
}
export function fetchGroups() {
  return request('/group', { method: 'GET' });
}
export function fetchUsersInGroup(groupId) {
  return request(`/group/${groupId}`, { method: 'GET' });
}
export function apiAddUsersToGroup(groupId, payload) {
  return request(`/group/${groupId}`, { method: 'POST', data: payload });
}
export function createUser(data) {
  return request('/user/register', { method: 'POST', data });
}
export function fetchUsers() {
  return request('/user', { method: 'GET' });
}
export function apiUpdateUserInfo(userId, data) {
  return request(`/user/${userId}`, { method: 'PUT', data });
}
export function apiUpdateUserGroupInfo(userId, groupId, data) {
  return request(`/group/${groupId}/${userId}`, { method: 'PUT', data });
}
export function apiRemoveUserFromGroup(userId, groupId) {
  return request(`/group/${groupId}/${userId}`, { method: 'DELETE' });
}
export function apiDeleteUser(userId) {
  return request(`/user/${userId}`, { method: 'DELETE' });
}

// 任务管理
export function apiCreateTask(payload) {
  return request('/task', { method: 'POST', data: payload });
}
export function apiFetchTasks() {
  return request('/task', { method: 'GET' });
}
export function apiFetchTaskImages(taskId) {
  return request(`/task/${taskId}`, { method: 'GET' });
}

// 我的任务
export function fetchUnapprovedImages() {
  return request('/image/return', { method: 'GET' });
}

// 上传图像
export function apiUploadedImage(payload) {
  return request('/image/upload/completed', { method: 'POST', data: payload });
}
export function triggerDetectionOfImage(option) {
  return request('/detection/trigger', { method: 'POST', data: { ...option } });
}

// 标签管理
export function apiFetchTags() {
  return request('/tag', { method: 'GET' });
}
export function apiCreateTag(tag) {
  return request('/tag', { method: 'POST', data: tag });
}
export function apiUpdateTag(tagId, tag) {
  return request(`/tag/${tagId}`, { method: 'POST', data: tag });
}
export function apiDeleteTag(tagId) {
  return request(`/tag/${tagId}`, { method: 'DELETE' });
}
export function apiFetchTag(tagId) {
  return request(`/tag/${tagId}`, { method: 'GET' });
}