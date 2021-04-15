import { request } from 'umi';

export async function getPermissions() {
  return request('/api/perm');
}
