<script setup lang="ts">
import TodoList from '../components/TodoList.vue'
</script>

<template>
  <main class="main">
    <TodoList/>
  </main>
</template>

<style>
.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}
</style>
