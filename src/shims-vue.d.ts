// TypeScript默认只识别 *.ts 文件，不识别 *.vue 文件，告诉TypeScript  *.vue 后缀的文件可以交给 vue 模块来处理。
// 注意在其他文件中导入 *.vue 文件的时候，需要写上 .vue 后缀

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
