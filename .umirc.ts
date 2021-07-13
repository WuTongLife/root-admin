import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  fastRefresh: {},
  dynamicImport: {}, // 动态加载
  exportStatic: {}, // 预渲染
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        // 配置微应用setting关联的路由
        {
          path: '/',
          component: '@/pages/index',
          exact: true,
        },
        {
          path: '/setting',
          microApp: 'setting',
        },
        {
          path: '/blog',
          microApp: 'blog',
        },
      ],
    },
  ],
});
