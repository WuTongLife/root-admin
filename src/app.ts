import { message, notification } from 'antd';
import { history, RequestConfig } from 'umi';
import type { ResponseError } from 'umi-request';
import { allMenus } from './services/menu';
import { queryCurrent } from './services/user';

message.config({
  maxCount: 1,
});

export async function getInitialState(): Promise<{
  currentUser?: any;
  menuData?: any[];
  fetchUserInfo?: () => Promise<any>;
  fetchPermissions?: () => Promise<any>;
}> {
  const fetchUserInfo = async () => {
    try {
      const res = await queryCurrent();
      return res.data;
    } catch (error) {
      history.push('/login');
    }
    return undefined;
  };

  const fetchPermissions = async () => {
    const res = await allMenus();
    return res.data || [];
  };

  // 如果是登录页面，不执行
  if (history.location.pathname !== '/login') {
    const [currentUser, menuData] = await Promise.all<API.CurrentUser, any[]>([fetchUserInfo(), fetchPermissions()]);
    // 生成一个Promise对象的数组
    return {
      fetchUserInfo,
      fetchPermissions,
      currentUser,
      menuData,
    };
  }

  return {
    fetchUserInfo,
    fetchPermissions,
  };
}

// export function useQiankunStateForSlave() {
//   // console.log(_menuData, _currentUser);
//   const [userPermissions, setUserPermissions] = useState({ currentUser: _currentUser, menuData: _menuData });
//   const fetchUserInfo = async () => {
//     try {
//       const res = await queryCurrent();
//       return res.data;
//     } catch (error) {
//       history.push('/login');
//     }
//     return undefined;
//   };

//   const fetchPermissions = async () => {
//     const res = await allMenus();
//     return res.data || [];
//   };

//   return {
//     ...userPermissions,
//     setUserPermissions,
//     fetchUserInfo,
//     fetchPermissions,
//     from: 'qiankun',
//   };
// }

const codeMessage: { [key: number]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/** 异常处理程序 */
const errorHandler = (error: ResponseError) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }

  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  throw error;
};

export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [
    (url, options) => {
      return {
        options: {
          ...options,
          headers: {
            ...options.headers,
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          data: JSON.stringify(options.data),
        },
        url,
      };
    },
  ],
  responseInterceptors: [
    async (response: any) => {
      const res = await response.clone().json();
      if (res.statusCode !== 200) {
        message.error(res.message);
      }
      if (res.statusCode === 401) {
        message.error(res.message);
        localStorage.removeItem('token');
        history.push('/login');
      }
      return response;
    },
  ],
};
