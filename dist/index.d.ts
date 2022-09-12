import type { App } from "vue";
/**
 * 批量注册组件
 */
declare const createChencc: (opts?: any) => {
    install(app: App): void;
};
export default createChencc;
import "./vite-env";