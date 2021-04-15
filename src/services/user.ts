import { request } from 'umi';

export type LoginParamsType = {
  username: string;
  password: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/api/user/login', {
    method: 'POST',
    data: params,
  });
}

export async function queryCurrent() {
  return request('/api/user/currentUser');
}

// export async function outLogin() {
//   return request('/api/login/outLogin');
// }
