import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      apps: [
        {
          name: 'setting', // 唯一 id
          entry: '//qiankun-setting.qqcywzc.cn/', // html entry
        },
        {
          name: 'blog', // 唯一 id
          entry: '//qiankun-blog.qqcywzc.cn/', // html entry
        },
      ],
    },
  },
});
