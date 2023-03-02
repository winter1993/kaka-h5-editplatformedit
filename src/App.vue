<script setup lang="ts">
import Header from '@/components/head.vue'
import { useComponentsStore } from './store/components'
import { useUserSelectComponentsStore } from './store/userSelectComponents'
import { useEditor } from './pages/hooks/hooks.js'
const { restActiveStyleHeight } = useEditor()
const useComponents = useComponentsStore()
const useUserSelectComponents = useUserSelectComponentsStore()
const config:any = {
  defaultComponents:(val:any) => {
    useComponents.updateComponents(val.components)
    useUserSelectComponents.update(val.userSelectComponents)
  },
  returnConfig:(val:any) => {
    useUserSelectComponents.update(val.userSelectComponents)
  },
  addComponent:(val:any) => {
    console.log('addComponent back:',val)
    useUserSelectComponents.update(val.userSelectComponents)
  },
  changeProps:(val:any) => {
    console.log('changeProps back:',val)
    useUserSelectComponents.update(val.userSelectComponents)
  },
  deleteComponent:(val:any) => {
    console.log('deleteComponent back:',val)
    useUserSelectComponents.update(val.userSelectComponents)
  },
  sortComponent:(val:any) => {
    console.log('sortComponent back:',val)
    useUserSelectComponents.update(val.userSelectComponents)
  },
  copyComponent:(val:any) => {
    console.log('copyComponent back:',val)
    useUserSelectComponents.update(val.userSelectComponents)
  },
}

// 监听事件
window.addEventListener('message',(e) => {
  // 不接受消息源来自于当前窗口的消息
  if (e.source === window || e.data === 'loaded') {
    return;
  }
  // 调用消息处理函数，对传入的数据进行格式化
  // store.commit(e.data.type, e.data.data);
  
  if(config[e.data.type]) config[e.data.type](e.data.data)
  console.log('message:',e.data.type, e.data.data)
});
</script>

<template>
  <Header />
  <RouterView/>
</template>

<style>
/* 滚动槽 */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 8px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    outline-offset: -2px;
    border-radius: 8px;
    background: rgba(0,0,0,0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
    
  }
  /* 旧语法 */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #615fe1;
    transition: scrollbar-color 0.5s ease-out;
  }
</style>
