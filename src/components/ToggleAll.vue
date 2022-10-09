<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const activeTodosLenght = computed(() => store.getters.getActiveTodosLenght)

function toggleAll() {
  store.commit('markAllAsComplete', !(activeTodosLenght.value === 0))
}
</script>

<template>
  <input
    type="checkbox"
    name="toggle-all"
    id="toggle-all"
    class="toggle-all"
    :checked="activeTodosLenght === 0"
    @change="toggleAll"
  >
  <label for="toggle-all">Mark all as complete</label>
</template>

<style scoped>
.toggle-all {
  text-align: center;
  border: none;
  /* Mobile Safari */
  opacity: 0;
  position: absolute;
}

.toggle-all+label {
  width: 60px;
  height: 34px;
  font-size: 0;
  position: absolute;
  top: -52px;
  left: -13px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.toggle-all+label:before {
  content: '❯';
  font-size: 22px;
  color: #e6e6e6;
  padding: 10px 27px 10px 27px;
}

.toggle-all:checked+label:before {
  color: #737373;
}
</style>
