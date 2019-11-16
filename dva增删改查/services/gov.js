import request from '../utils/request';

// 获取机构列表
export function govList() {
  return request('/api/main/govList');
}
// 添加机构列表
export function addGov(params) {
  console.log('params...', params);
  return request('/api/main/addGov', {
    body: JSON.stringify(params), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
  })
}