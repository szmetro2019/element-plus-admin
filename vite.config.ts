import { UserConfigExport,ConfigEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
// import importToCDN from 'vite-plugin-cdn-import'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// ie
// import legacy from '@vitejs/plugin-legacy'
// gzip压缩
import viteCompression from 'vite-plugin-compression'
// 指向路径@
import path from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons';
// import { viteMockServe} from 'vite-plugin-mock';
export default ({command}: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/styles/element/index.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
      // importToCDN({
      //   modules: [{
      //       name: 'vue',
      //       var: 'Vue',
      //       path: 'https://cdn.jsdelivr.net/npm/vue@3.2.29/dist/vue.global.prod.js'
      //     },
      //     {
      //       name: 'vuex',
      //       var: 'Vuex',
      //       path: 'https://unpkg.com/vuex@4.0.2/dist/vuex.global.prod.js'
      //     },
      //     {
      //       name: 'vue-router',
      //       var: 'VueRouter',
      //       path: 'https://unpkg.com/vue-router@4.0.12/dist/vue-router.global.prod.js'
      //     },

      //     // {
      //     //         name:'ant-design-vue',
      //     //         var:'antd',
      //     //         path:'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.js',
      //     //         css:'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.min.css'
      //     //     },
      //   ]
      // }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver({
          importStyle: "sass", // directives: true, // version: "1.2.0-beta.6",
        })],
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 3072,
        algorithm: 'gzip',
        ext: '.gz'
      }),
      viteSvgIcons({
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      // viteMockServe({
      //   mockPath: 'mock',
      //   localEnabled: command === 'serve',
      //   prodEnabled: command !== 'serve' && prodMock,
      //   // injectCode: `
      //   //   import { setupProdMockServer } from './mockProdServer';
      //   //   setupProdMockServer();
      //   // `, 
      // }),
      // legacy({
      //   targets: ['ie >= 11'],
      //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      // })
    ],
    build: {
      cssCodeSplit: false,
      // target: "es2015", // 默认 "modules"
      // rollupOptions: {
      //   output: {
      //     chunkFileNames: "static/js/[name]-[hash].js",
      //     entryFileNames: "static/js/[name]-[hash].js",
      //     assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      //   },
      // },
      // assetsDir:'/njlovelikeloulou/',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    // base: '/',
    server: {
      port: 2022,
      open: true,
      // https: true,
      //  proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // '/api': {
      //   target: 'htt.com', // 后端服务实际地址
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/api/, '')
      // }
      // proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      //   // 正则表达式写法
      //   '^/api': {
      //     target: 'https://pandanj.top', // 后端服务实际地址
      //     changeOrigin: true, //开启代理
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // }
    },
    // name: 'return-partial'
    // hostname: '0.0.0.0', // 默认是 localhost
    //   port: '8000', // 默认是 3000 端口
    //   open: true, // 浏览器自动打开
    //   https: false, // 是否开启 https
    //   ssr: false, // 服务端渲染
    //   base: './', // 生产环境下的公共路径
    //   outDir: 'dist', // 打包构建输出路径，默认 dist ，如果路径存在，构建之前会被删除
  }
}