<template>
  <div class="edit-container">
    <div class="component-container">
      <ComponentSelect />
    </div>
    <div class="editor-view">
      <div class="main-container">
        <div class="preview-container">
          <a-spin :spinning="state.spinning">
            <iframe
              referrerpolicy="unsafe-url"
              id="frame"
              @load="initConfig"
              frameborder="0"
              class="pre-view"
              :src="host === 'development'?'http://localhost:8080/':'https://winter1993.github.io/kaka-template/'"
              :style="{
                height: editorState.containerHeight + 'px',
              }"
            />
            <!-- 拖拽放置 -->
            <div
              @drop="drop_handler"
              @dragover="dragover_handler"
              v-show="useDrag.dragStart"
              class="drag-hover"
            />
          </a-spin>
        </div>
        <div :style="editorState.hoverStyle" class="se-view-hover-tip"></div>
        <div :style="editorState.activeStyle" class="se-view-active-tip"></div>
        <div
          v-show="editorState.toolStyle.top"
          :style="{
            top: editorState.toolStyle.top,
          }"
          class="se-view-tools"
          id="se-view-tools"
        >
          <div
            :class="[
              'sev-tools-move',
              (editorState.isTop || editorState.isBottom) && 'sev-tools-move-single',
            ]"
          >
            <ArrowUpOutlined
              v-if="!editorState.isTop"
              @click="changeIndex(-1)"
              class="fd-iconfont"
            />
            <ArrowDownOutlined
              v-if="!editorState.isBottom"
              @click="changeIndex(1)"
              class="fd-iconfont"
            />
          </div>
          <div class="sev-tools-copy">
            <CopyOutlined @click="copyComponent" class="fd-iconfont" />
          </div>
          <div class="sev-tools-copy">
            <DeleteOutlined @click="() => deleteComponent()" class="fd-iconfont" />
          </div>
        </div>
      </div>
    </div>
    <div class="formbox">
      <div
        v-for="(item, i) in useUserSelectComponents.userSelectComponents"
        :key="i"
        v-show="editorState.current - 1 === i"
      >
        <FormKit type="form" id="myform" v-model="item.props" @submit="register">
          <FormKitSchema :schema="item.formKit" />
          <pre wrap>{{ item.props }}</pre>
        </FormKit>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowUpOutlined,
  CopyOutlined,
  DeleteOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons-vue";
import { FormKitSchema } from "@formkit/vue";
import ComponentSelect from "./componentsSelect.vue";
import { reactive, watch } from "vue";
import { useEditor } from "./hooks/hooks";
import { useDragStore } from "@/store/dragMask";
import { useUserSelectComponentsStore } from "@/store/userSelectComponents";
const host = import.meta.env.MODE
console.log('host:',host)
const useDrag = useDragStore();
const { eventInit, editorState, getIndex, setFixedStyle, init } = useEditor();
const state: any = reactive({
  spinning: true,
});

const register = (e: any) => {
  console.log("register:", e);
  const comp = [...useUserSelectComponents.userSelectComponents];
  console.log("watch:", comp[editorState.current - 1]);
  postMsgToChild({
    type: "changeProps",
    data: {
      item: JSON.stringify(comp[editorState.current - 1]),
      index: editorState.current,
    },
  });
};
const useUserSelectComponents = useUserSelectComponentsStore();
const postMsgToChild = (msg: any) => {
  window.frames[0] && window.frames[0].postMessage(msg, "*");
};
const changeIndex = (op: any) => {
  postMsgToChild({ type: "sortComponent", data: { op, index: editorState.current } });
  const num = editorState.current + op
  editorState.current = num
};
const copyComponent = () => {
  postMsgToChild({ type: "copyComponent", data: editorState.current });
};
const deleteComponent = (index: any = undefined) => {
  postMsgToChild({
    type: "deleteComponent",
    data: index !== undefined ? index : editorState.current,
  });
  if(editorState.current === 1){
    editorState.hoverStyle = {}
    editorState.activeStyle = {}
    editorState.toolStyle.top = 0
  }
};
//拖拽
const dragover_handler = (ev: any) => {
  ev.preventDefault();
};
const drop_handler = (ev: any) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  const { layerY } = ev;
  // 计算放置的位置 index
  const index = getIndex(layerY);
  // 特定位置增加组件
  console.log("addComponent:", data, index);
  postMsgToChild({
    type: "addComponent",
    data: JSON.parse(JSON.stringify({ data, index })),
  });
};

// const onDrag = ({ left, top }: any, index: any, props: any) => {
//   postMsgToChild({ type: "changeIndex", data: index });
//   postMsgToChild({
//     type: "changeProps",
//     data: {
//       ...props,
//       x: left,
//       y: top,
//     },
//   });
// };
const initConfig = () => {
  console.log("loading...");
  state.spinning = false;

  eventInit((index: any) => {
    editorState.current = index;
    postMsgToChild({ type: "changeIndex", data: editorState.current });
  });
  watch(
    [() => useUserSelectComponents.userSelectComponents, () => editorState.current],
    () => {
      init(editorState.current);
      // setFixedStyle(editorState.current);
    }
  );
};
</script>

<style scoped lang="less">
@import "./edit.less";
.formbox {
  height: calc(~"100vh - 60px");
  padding: 20px;
  box-shadow: 3px 0 16px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  background: #fff;
  width: 300px;
}
  .pre-view html::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  .pre-view html::-webkit-scrollbar-track {
    border-radius: 8px;
  }
  /* 滚动条滑块 */
  .pre-view html::-webkit-scrollbar-thumb {
    outline-offset: -2px;
    border-radius: 8px;
    background: rgba(0,0,0,0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
    
  }
  /* 旧语法 */
  .pre-view html::-webkit-scrollbar-thumb:hover {
    background-color: #615fe1;
    transition: scrollbar-color 0.5s ease-out;
  }
</style>
