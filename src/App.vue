<script setup lang="ts">
import Header from '@/components/head.vue'
import { useReturnConfigStore } from './store/returnConfig'
const config:any = useReturnConfigStore()()
// 监听事件
window.addEventListener('message',(e) => {
  // 不接受消息源来自于当前窗口的消息
  if (e.source === window || e.data === 'loaded') {
    return;
  }
  // 调用消息处理函数，对传入的数据进行格式化
  // store.commit(e.data.type, e.data.data);
  
  if(config[e.data.type]) config[e.data.type](e.data.data)
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
