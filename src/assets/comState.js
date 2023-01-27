import {reactive,toRefs} from "vue"
export const comState=()=> {
    const state = reactive({
        toDoName:"Pobitro Debnath"
    })

    return toRefs(state)
}