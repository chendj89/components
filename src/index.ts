import * as components from "@/components/index";
import type { App } from "vue";

/**
 * 批量注册组件
 */
const createChencc = (opts?: any) => ({
  install(app: App) {
    for (let [name, com] of Object.entries(components)) {
      app.component(name, com);
    }
  },
});

export default createChencc;
