# vue-admin
this is vue-admin, created by sea, intialized on 2018.12.1

### Intialize 

vue cli 3 ` npm install -g @vue/cli  `

create a new project (manually: Balel/Router/Vuex/CSS Pre-processors/Unit Testing) ` vue create vue-admin (or vue ui) `

project setup ` npm install `

compiles and hot-reloads for development ` npm run serve `

compiles and minifies for production ` npm run build `

run your tests ` npm run test `

lints and fixes files ` npm run lint `

run your unit tests ` npm run test:unit `


### plugins

>  Vue 引入 TypeScript
* 安装vue的官方插件: npm i vue-class-component vue-property-decorator --save
* npm i ts-loader typescript   tslint tslint-loader tslint-config-standard --save-dev

>  element、style-resources-loader
vue add element
vue add style-resources-loader （或者npm i style-resources-loader -D， 引入sass全局变量，mixin，function等）

> axios
npm i axios --save

> lodash
npm i lodash --save


### some errors
* Failed to load plugin html: Cannot find module 'eslint-plugin-html' ：  npm install file-loader –save-dev
* Uncaught (in promise) DOMException: Failed to execute 'open' on 'XMLHttpRequest': Invalid URL:  url前面一定要加http://
* 默认验证码图片 ：captchaSrc=require('./default_captcha.jpeg')