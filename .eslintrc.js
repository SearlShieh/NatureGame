// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 继承 Vue 和 TS 的推荐规则
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential', // Vue3 基础规则
    'plugin:vue/vue3-strongly-typed', // Vue3 TS 增强规则（关键）
    'plugin:@typescript-eslint/recommended', // TS 推荐规则
  ],
  parser: 'vue-eslint-parser', // 解析 Vue 文件的核心解析器（必须）
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // 配置 TS 解析器（处理 <script lang="ts"> 内的代码）
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    'vue', // Vue 插件
    '@typescript-eslint', // TS 插件
  ],
  rules: {
    // 关闭可能冲突的 JS 规则（TS 会处理类型检查）
    'no-undef': 'off',
    // 可选：调整其他规则
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
