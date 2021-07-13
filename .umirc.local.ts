import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      apps: [
        {
          name: 'setting', // 唯一 id
          entry: '//localhost:8051', // html entry
        },
        {
          name: 'blog', // 唯一 id
          entry: '//localhost:8052', // html entry
        },
      ],
    },
  },
});
