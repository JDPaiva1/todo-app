<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  isEdit: { type: Boolean, default: false },
  callbackBlur: { type: Function, required: false },
  callbackEnter: { type: Function, required: false },
  callbackEscape: { type: Function, required: false }
})
defineEmits(['update:modelValue'])

const inputText = ref()

onMounted(() => {
  inputText.value.focus()
})

function handleBlur() {
  if(props.callbackBlur) {
    props.callbackBlur()
  }
}
function handleEnter() {
  if(props.callbackEnter) {
    props.callbackEnter()
  }
}
function handleEscape() {
  if(props.callbackEscape) {
    props.callbackEscape()
  }
}
</script>

<template>
  <input
    type="text"
    ref="inputText"
    :class="[isEdit ? 'edit' : 'new-todo']"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    @blur="handleBlur"
    @keyup.enter="handleEnter"
    @keyup.escape="handleEscape"
  >
</template>

<style scoped>
.todoapp input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}
.todoapp input::-moz-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}
.todoapp input::input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.todo-list li.editing .edit {
  display: block;
  width: 506px;
  padding: 12px 16px;
  margin: 0 0 0 43px;
}
</style>
