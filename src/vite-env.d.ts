/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
/**
 * 接口·工具组件
 */
declare interface IVpTool {
  /**
   * 更新显示消息
   */
  updateMsg: (msg: string) => void;
  /**
   * 属性
   */
  props: {
    /**
     * 消息
     */
    msg?: string;
  };
}
