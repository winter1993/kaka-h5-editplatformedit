<template>
     <a-spin :spinning="state.creating" tip="Loading...">
    <div class="index-wrapper">
        <div>x:{{ x }}, y:{{ y }}</div>
        <a-button type="primary"
            @click="()=> router.push('/edit')"
        >新建</a-button>
    </div>
  </a-spin>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import {useMouse} from '@vueuse/core'
import { useRouter } from 'vue-router'
const router = useRouter()
const {x,y} = useMouse()
const state = reactive({
    creating:true
})
setTimeout(() => {
    state.creating = false
}, 500);
</script>

<style scoped>
.index-wrapper {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
}
</style>