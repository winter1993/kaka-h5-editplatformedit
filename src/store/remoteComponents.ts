import {defineStore} from 'pinia'
export const useRemoteComponentsStore = defineStore({
    id:'remoteComponent',
    state:() => {
        return {
            remoteComponents:[]
        }
    },
    actions:{
        update(val:any){
            this.remoteComponents = val
        }
    }
})