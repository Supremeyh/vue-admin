
module.exports = {
  // 基本路径
  baseUrl: '/',
  // 输出文件目录
  outputDir: 'dist',
  // 生成的静态资源的目录。
	assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  compiler: false,
  // webpack配置
  chainWebpack: () => {},
  configureWebpack: () => {},
  // vue-loader 配置项
  vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
   // 使用css分离插件 ExtractTextPlugin
   extract: true,
   // 开启 CSS source maps
   sourceMap: false,
   // css预设器配置项
   loaderOptions: {},
   // 启用 CSS modules
   modules: false
  },
  // 为Babel或TypeScript使用thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建，在适当的时候开启几个子进程去并发的执行压缩
  parallel: require('os').cpus().length > 1,
  // 是否启用dll
  dll: false,
  // PWA 插件相关配置
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
   open: process.platform === 'darwin',
   host: '0.0.0.0',
   port: 8080,
   https: false,
   hotOnly: true, // 热更新
   proxy: null, // 设置代理
   before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {

  }
}