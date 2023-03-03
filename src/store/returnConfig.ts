import {defineStore} from 'pinia'
import { useUserSelectComponentsStore } from './userSelectComponents'
import { useComponentsStore } from './components'
export const useReturnConfigStore =() =>{
    const useUserSelectComponents = useUserSelectComponentsStore()
    const useComponents = useComponentsStore()
    return defineStore({
        id:'returnConfig',
        actions:{
            defaultComponents:(val:any) => {
            useComponents.updateComponents(val.components)
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
    })
}


