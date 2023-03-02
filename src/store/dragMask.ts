import {defineStore} from 'pinia'
export const useDragStore = defineStore({
    id:'dragState',
    state:() => {
        return {
            dragStart:false
        }
    },
    actions:{
        update(val:any){
            this.dragStart = val
        }
    }
})