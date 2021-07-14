import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: { type: 'hash' },
  hash: true,
  fastRefresh: {},
  dynamicImport: {
    loading: '@/components/PageLoading',
  }, // 动态加载
  exportStatic: {}, // 预渲染
  theme: {
    '@ant-prefix': 'root-antd',
  },
  routes: [
    {
      path: '/login',
      component: '@/pages/login',
      exact: true,
    },
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
