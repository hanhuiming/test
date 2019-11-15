import request from '../utils/request';

// 获取机构列表
export function govList() {
  return request('/api/main/govList');
}
