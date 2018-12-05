// "off" 或 0 - 关闭   "warn" 或 1 - 警告   "error" 或 2 - 错误

module.exports = {
  "root": true,
  "env": {
      "browser": true,
      "node": true,
      "commonjs": true,
      "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": 'module'
  },
  "plugins": [
    'html'
  ],
  "rules": {
      "indent": [ "error","tab" ],
      "linebreak-style": [ "error", "unix" ], // 强制使用一致的换行符风格
      "quotes": [ "error", "single" ], // 单引号
      "semi": [ "error", "never" ], // 结束不添加分号
      'no-console': 'off', // console
      "indent": ["error", 2], // indent
  }
};