import {defineStore} from 'pinia'
export const useComponentsStore = defineStore({
    id:'components',
    state:() => {
        return {
            components:<any>[]
        }
    },
    actions:{
        updateComponents(val:any){
            this.components = val
        }
    }
})