import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [{ path: '/', component: '@/pages/index' }],
    },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'blog-admin', // 博客后台
          entry: '//localhost:7001', // html entry
        },
        {
          name: 'progress-admin', // 小程序后台
          entry: '//localhost:7002', // html entry
        },
      ],
    },
  },
});
