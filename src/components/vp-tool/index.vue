<script setup lang="ts">
import { reactive, ref } from "vue";
const props = withDefaults(defineProps<{ msg?: string }>(), {});
let msg = ref(props.msg);
const updateMsg: IVpTool["updateMsg"] = (_msg: string) => {
  msg.value = _msg;
};
defineExpose({
  updateMsg,
  props,
});
const menu: any = [];
const list: any[] = [];
const rightMenu = (item: any) => {};
function backMenu() {}



</script>
<template>
  <div class="vp-tool">
    <div class="vp-tool-name">名称</div>
    <div
      class="vp-tool-content"
      v-for="item in menu"
      :key="item.name"
      :class="{ active: item.active }"
    >
      <a
        v-for="child in item.children"
        :key="child.name"
        class="vp-tool-btn"
        :href="child.link"
        :target="child.link ? '_blank' : '_self'"
        @contextmenu.prevent="rightMenu(child)"
      >
        <component class="vp-tool-icon" :is="child.com"></component>
      </a>
    </div>
    <div class="vp-tool-content" :class="{ active: list.length }">
      <div class="vp-tool-btn" v-if="list.length" @click="backMenu">
       
      </div>
      <a
        v-for="item in list"
        class="vp-tool-btn"
        :key="item.name"
        :href="item.link"
        :target="item.link ? '_blank' : '_self'"
      >
        <component class="vp-tool-icon" :is="item.com"></component>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.vp {
  &-tool {
    --vp-tool-name:#f00;
    position: fixed;
    left: 0;
    bottom: 10px;
    width: 100%;
    z-index: 999;
    text-align: center;
    &-name {
      color:var(--vp-tool-name)
    }
    &-content {
      position: absolute;
      left: 50%;
      bottom: 0;
      margin: 0 auto;
      font-size: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border-radius: 6px;
      background: #fff;
      box-shadow: 0 4px 12px -1px rgb(18 22 33 / 10%);
      transition: all 0.25s;
      transform: translate(-50%, calc(100% + 10px));
      z-index: 0;
      &.active {
        transform: translate(-50%, 0);
        z-index: 1;
      }
    }

    &-btn {
      position: relative;
      display: inline-flex;
      margin: 0 10px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      svg {
        color: #000;
      }
    }
  }
}
</style>
