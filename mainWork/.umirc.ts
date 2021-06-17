import routes from './config/routes';
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/home' },
  // ],
  routes: routes,
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'umiWork', // 唯一 id
          entry: '//localhost:9000', // html entry
          // credentials: true,
          props: {
            name: 'kuitos',
          },
        },
        {
          name: 'vueWork', // 唯一 id
          entry: '//localhost:8080', // html entry
        },
      ],
    },
  },
  fastRefresh: {},
});
