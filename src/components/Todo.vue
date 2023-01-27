<template>
    <h1> To Do List </h1>
    <input type="text" >
    <button>Add </button>
</template>

<script>
import {comState} from "../assets/comState"
export default {
    setup(){
       let {toDoName} = comState()
       console.log(toDoName.value)
    }
}
</script>

<style lang="scss" scoped>

</style>