import {defineStore} from 'pinia'
export const useUserSelectComponentsStore = defineStore({
    id:'userSelectComponents',
    state:() => {
        return {
            userSelectComponents:<any>[]
        }
    },
    actions:{
        update(val:any){
            this.userSelectComponents = val
        }
    }
})