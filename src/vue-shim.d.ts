declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // 声明 .vue 文件的默认导出是一个 Vue 组件类型
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
