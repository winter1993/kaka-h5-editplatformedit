<template>
  <div class="select-menu">
    <div class="component-preview">
      <div class="list-view">
        <div
          class="co-item"
          :key="index"
          @dragstart="(e) => setDragStart(e, true, item)"
          @dragend="(e) => setDragStart(e, false)"
          draggable="true"
          v-for="(item, index) in useComponents.components"
        >
          <div class="preview-item">
            <holder-outlined />
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { HolderOutlined } from '@ant-design/icons-vue';
import { useComponentsStore } from "@/store/components";
import { useDragStore } from "@/store/dragMask";
const useComponents = useComponentsStore();
const useDrag = useDragStore();
console.log("components:", useComponents.components);
const setDragStart = (ev: any, v: any, data: any = undefined) => {
  console.log("setDragStart:", { ev, v, data });
  useDrag.update(v);
  if (data) {
    ev.dataTransfer.setData("text/plain", JSON.stringify(data));
  }
};
</script>

<style scoped lang="less">
.select-menu {
  padding: 20px;
  box-shadow: 3px 0 16px rgba(0, 0, 0, 0.06);
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  .title {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
    margin-left: 20px;
  }
  .left-menu {
    width: 80px;
  }
  .menu-item {
    cursor: pointer;
    display: inline-block;
    height: 26px;
    padding: 0 8px;
    width: 80px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin-bottom: 20px;
    &.active {
      color: #fff;
      background: #1890ff;
    }
    &.disabled {
      color: #999;
    }
  }
  .list-view {
    height: calc(~"100vh - 120px");
    overflow-y: auto;
    overflow-x: hidden;
  }
  .component-preview {
    display: flex;
    justify-content: space-between;
    .co-item {
      margin-bottom: 5px;
      transition: transform 100ms linear;
      &:hover {
        cursor: move;
      }
      .co-title {
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: -30px;
        position: relative;
        z-index: 9;
        text-align: center;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        display: none;
      }
      &:hover {
        transform: scale(1.05);
        .co-title {
          display: block;
        }
      }
    }
    .preview-item {
      padding:10px;
      width: 258px;
      border: 1px solid #f0f0f0;
      margin-right: 10px;
      position: relative;
      z-index: 1;
    }
  }
  .ant-menu-inline {
    height: 100%;
  }
}
</style>
