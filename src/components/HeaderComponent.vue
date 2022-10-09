<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import InputText from './InputText.vue'

const store = useStore()
const newTodo = ref('')

function addTodo() {
  if(newTodo.value) {
    store.commit('addTodo', newTodo.value)
  }
  newTodo.value = ''
}
</script>

<template>
  <header>
    <h1 id="h1">todos</h1>
    <InputText :callbackEnter="addTodo" v-model="newTodo"/>
  </header>
</template>

<style scoped>
.todoapp h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
</style>
