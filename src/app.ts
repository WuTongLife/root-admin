import { RequestConfig } from 'umi';
import { fetchApps } from './services/common';

export const request: RequestConfig = {
  errorConfig: {
    // 后端返回格式不满足是，自定义格式
    adaptor: (resData) => {
      console.log('resData', resData);
      return {
        ...resData,
        success: resData.ok,
        errorMessage: resData.message,
      };
    },
  },
  middlewares: [
    async function middlewareA(ctx, next) {
      console.log('A before');
      await next();
      console.log('A after');
    },
    async function middlewareB(ctx, next) {
      console.log('B before');
      await next();
      console.log('B after');
    },
  ],
  requestInterceptors: [],
  responseInterceptors: [],
  timeout: 60000,
};

// export const qiankun = fetchApps().then((res) => {
//   return {
//     apps: res.data,
//     lifeCycles: {
//       afterMount: (props: any) => {
//         console.log('afterMount', props);
//       },
//     },
//   };
// });
