import { defineComponent as y, ref as x, resolveComponent as C, openBlock as t, createElementBlock as o, Fragment as i, renderList as p, createElementVNode as u, normalizeClass as m, withModifiers as M, createBlock as v, resolveDynamicComponent as g, createVNode as B, createCommentVNode as O } from "vue";
const S = { class: "vp-tool" }, T = ["href", "target", "onContextmenu"], V = ["href", "target"], j = /* @__PURE__ */ y({
  __name: "index",
  props: {
    msg: null
  },
  setup(c, { expose: s }) {
    const n = c;
    let l = x(n.msg);
    s({
      updateMsg: (_) => {
        l.value = _;
      },
      props: n
    });
    const f = [], a = [], k = (_) => {
    };
    function h() {
    }
    return (_, A) => {
      const b = C("MdiLightArrangeSendToBack");
      return t(), o("div", S, [
        (t(), o(i, null, p(f, (e) => u("div", {
          class: m(["vp-tool-content", { active: e.active }]),
          key: e.name
        }, [
          (t(!0), o(i, null, p(e.children, (r) => (t(), o("a", {
            key: r.name,
            class: "vp-tool-btn",
            href: r.link,
            target: r.link ? "_blank" : "_self",
            onContextmenu: M((E) => k(), ["prevent"])
          }, [
            (t(), v(g(r.com), { class: "vp-tool-icon" }))
          ], 40, T))), 128))
        ], 2)), 64)),
        u("div", {
          class: m(["vp-tool-content", { active: a.length }])
        }, [
          a.length ? (t(), o("div", {
            key: 0,
            class: "vp-tool-btn",
            onClick: h
          }, [
            B(b)
          ])) : O("", !0),
          (t(), o(i, null, p(a, (e) => u("a", {
            class: "vp-tool-btn",
            key: e.name,
            href: e.link,
            target: e.link ? "_blank" : "_self"
          }, [
            (t(), v(g(e.com), { class: "vp-tool-icon" }))
          ], 8, V)), 64))
        ], 2)
      ]);
    };
  }
});
const L = (c, s) => {
  const n = c.__vccOpts || c;
  for (const [l, d] of s)
    n[l] = d;
  return n;
}, N = /* @__PURE__ */ L(j, [["__scopeId", "data-v-2b17e345"]]), z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VpTool: N
}, Symbol.toStringTag, { value: "Module" })), D = (c) => ({
  install(s) {
    for (let [n, l] of Object.entries(z))
      s.component(n, l);
  }
});
export {
  D as default
};
