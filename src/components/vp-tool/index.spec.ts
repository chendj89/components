import { mount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import com from "./index.vue";

describe("vp-tool 测试", () => {
  // it=test 替代品
  it("渲染内容-测试插槽", () => {
    const wrapper = mount(com, {
      slots: {
        default: "hello vp-tool",
      },
    });
    expect(wrapper.text()).contains("hello");
  });
  test("赋值属性-测试属性", () => {
    // 相当于 <vp-tool msg="hello vp-tool"></vp-tool>
    const wrapper = mount(com, {
      propsData: {
        msg: "hello vp-tool",
      },
    });
    expect(wrapper.props().msg).toBe("hello vp-tool");
  });
});
