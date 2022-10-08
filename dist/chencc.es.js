import { defineComponent as h, ref as y, openBlock as o, createElementBlock as c, Fragment as i, renderList as u, createElementVNode as r, normalizeClass as v, withModifiers as x, createBlock as m, resolveDynamicComponent as f, createCommentVNode as C, pushScopeId as M, popScopeId as S } from "vue";
const I = (e) => (M("data-v-ba78cfb8"), e = e(), S(), e), O = { class: "vp-tool" }, j = /* @__PURE__ */ I(() => /* @__PURE__ */ r("div", { class: "vp-tool-name" }, "\u540D\u79F0", -1)), B = ["href", "target", "onContextmenu"], V = ["href", "target"], w = /* @__PURE__ */ h({
  __name: "index",
  props: {
    msg: null
  },
  setup(e, { expose: s }) {
    const n = e;
    let l = y(n.msg);
    s({
      updateMsg: (_) => {
        l.value = _;
      },
      props: n
    });
    const g = [], p = [], b = (_) => {
    };
    function k() {
    }
    return (_, F) => (o(), c("div", O, [
      j,
      (o(), c(i, null, u(g, (t) => r("div", {
        class: v(["vp-tool-content", { active: t.active }]),
        key: t.name
      }, [
        (o(!0), c(i, null, u(t.children, (a) => (o(), c("a", {
          key: a.name,
          class: "vp-tool-btn",
          href: a.link,
          target: a.link ? "_blank" : "_self",
          onContextmenu: x((N) => b(), ["prevent"])
        }, [
          (o(), m(f(a.com), { class: "vp-tool-icon" }))
        ], 40, B))), 128))
      ], 2)), 64)),
      r("div", {
        class: v(["vp-tool-content", { active: p.length }])
      }, [
        p.length ? (o(), c("div", {
          key: 0,
          class: "vp-tool-btn",
          onClick: k
        })) : C("", !0),
        (o(), c(i, null, u(p, (t) => r("a", {
          class: "vp-tool-btn",
          key: t.name,
          href: t.link,
          target: t.link ? "_blank" : "_self"
        }, [
          (o(), m(f(t.com), { class: "vp-tool-icon" }))
        ], 8, V)), 64))
      ], 2)
    ]));
  }
});
const z = (e, s) => {
  const n = e.__vccOpts || e;
  for (const [l, d] of s)
    n[l] = d;
  return n;
}, D = /* @__PURE__ */ z(w, [["__scopeId", "data-v-ba78cfb8"]]), E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VpTool: D
}, Symbol.toStringTag, { value: "Module" })), L = (e) => ({
  install(s) {
    for (let [n, l] of Object.entries(E))
      s.component(n, l);
  }
});
export {
  L as default
};
