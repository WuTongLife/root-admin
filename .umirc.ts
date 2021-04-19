import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: { type: 'hash' },
  routes: [
    {
      path: '/',
      component: '@/layouts/ConfigLayout',
      routes: [
        {
          path: '/login',
          exact: true,
          component: '@/pages/login/index',
        },
        {
          path: '/',
          component: '@/layouts/index',
          routes: [
            // {
            //   path: '/blog',
            //   microApp: 'blog-admin',
            // },
            // {
            //   path: '/progress',
            //   microApp: 'progress-admin',
            // },
            {
              path: '/setting',
              microApp: 'setting-admin',
              microAppProps: {
                autoSetLoading: true,
                className: 'myContainer',
                wrapperClassName: 'myWrapper',
              },
            },
            {
              path: '/datav',
              microApp: 'dataV-admin',
            },
            {
              path: '/',
              component: './index',
              // redirect: '/setting',
            },
          ],
        },
      ],
    },
  ],
  locale: {
    antd: false,
  },
  antd: {
    compact: true,
  },
  // dynamicImport: {
  //   loading: '@/components/Loading/index',
  // },
  fastRefresh: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        // {
        //   name: 'blog-admin', // 博客后台
        //   entry: '//localhost:8001', // html entry
        // },
        // {
        //   name: 'progress-admin', // 小程序后台
        //   entry: '//localhost:8002', // html entry
        // },
        // {
        //   name: 'dataV-admin', // 数据大屏
        //   entry: '//localhost:8009', // html entry
        // },
        {
          name: 'setting-admin', // 小程序后台
          entry: '//localhost:8010', // html entry
          props: { from: 'qiankun' },
        },
      ],
    },
  },
  theme: {
    '@ant-prefix': 'root',
    '@primary-color': '#3977b1',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' },
    },
  },
});
