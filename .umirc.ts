import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  styles: [],
  sass: {},
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  proxy: {
    '/': {
      'target': 'http://www.yzstu.cn:8088/',
      'changeOrigin': true,
    },
  },
});
