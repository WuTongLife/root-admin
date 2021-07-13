import { request } from 'umi';

// 获取子模块注册信息
export async function fetchApps() {
  return request<API.Response>('/api/qiankun/apps');
}
