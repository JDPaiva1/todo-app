import { describe, it, expect, vi } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import store from '../../store'
import Header from '../HeaderComponent.vue'
import Footer from '../FooterComponent.vue'
import TodoList from '../TodoList.vue'

describe('Components render', () => {
  it('Header renders properly', () => {
    const wrapper = shallowMount(Header, { global: { plugins: [store] }})
    const component = wrapper.find('header')
    expect(component.text()).toContain('todos')
  })

  it('Footer renders properly', () => {
    const wrapper = shallowMount(Footer, { global: { plugins: [store] }})
    const component = wrapper.find('.footer')
    expect(component.text()).toContain('left')
  })

  it('TodoList renders properly', () => {
    const wrapper = shallowMount(TodoList, { global: { plugins: [store] }})
    const component = wrapper.find('.todo-list')
    expect(component.classes()).toContain('todo-list')
  })
})

describe('TextInput.vue', () => {
  const wrapper = mount(Header, { global: { plugins: [store] } })
  const component = wrapper.find('.new-todo')

  it('Input text renders properly', () => {
    expect(component.classes()).toContain('new-todo')
  })

  it('add new todo', async () => {
    const lengthBefore = store.getters.getTodoListLenght

    expect(wrapper.vm.newTodo).toBe('')
    component.setValue('new todo')
    expect(wrapper.vm.newTodo).toBe('new todo')
    await component.trigger('keyup.enter')

    expect(store.getters.getTodoListLenght).toBe(lengthBefore + 1)
  })
})

describe('ListItem.vue', () => {
  it('List renders properly', () => {
    const wrapper = mount(TodoList, { global: { plugins: [store] } })
    const components = wrapper.findAll('li')
    expect(components.length).toBe(store.getters.getTodoListLenght)
  })

  it('delete button', async () => {
    const wrapper = mount(TodoList, { global: { plugins: [store] } })
    const component = wrapper.findAll('li')[0].find('.destroy')
    const lengthBeforeClick = store.getters.getTodoListLenght
    await component.trigger('click')
    expect(store.getters.getTodoListLenght).toBe(lengthBeforeClick - 1)
  })
})