import { createStore } from 'vuex'

export interface State {
  todoList: Array<{id: number, title: string, completed: boolean, editing: boolean}>,
  routeName: String
}

const store = createStore<State>({
  state: { 
    todoList: [
      { id: 0, title: 'task #1', completed: true, editing: false },
      { id: 1, title: 'task #2', completed: false, editing: false }
    ],
    routeName: ''
  },
  getters: {
    completedTodos(state) {
      return state.todoList.filter(todo => todo.completed)
    },
    activeTodos(state) {
      return state.todoList.filter(todo => todo.completed === false)
    },
    getTodoList(state, getters) {
      switch (state.routeName) {
        case 'completed':
          return getters.completedTodos
        case 'active':
          return getters.activeTodos
        default:
          return state.todoList
      }
    },
    getTodoListLenght(state) {
      return state.todoList.length
    },
    getCompletedTodos(state, getters) {
      return getters.completedTodos.length
    },
    getActiveTodosLenght(state, getters) {
      return getters.activeTodos.length
    }
  },
  mutations: {
    changeRoute(state, newRoute) {
      state.routeName = newRoute
    },
    addTodo(state, newTodo) {
      state.todoList.push({
        id: state.todoList.length,
        title: newTodo,
        completed: false,
        editing: false
      })
    },
    deleteTodo(state, todo) {
      const todoIndex:number = state.todoList.indexOf(todo)
      state.todoList.splice(todoIndex, 1)
    },
    markAllAsComplete(state, toggle) {
      state.todoList.forEach(todo => {
        todo.completed = toggle;
      })
    },
    markAsComplete(state, id) {
      state.todoList.find(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
      })
    },
    toggleEditingMode(state, id) {
      state.todoList.find(todo => {
        if(todo.id === id) {
          todo.editing = !todo.editing
        }
      })
    },
    editTodo(state, payload) {
      state.todoList.find(todo => {
        if(todo.id === payload.id) {
          todo.title = payload.title
        }
      })
    },
    setTodoList(state, todoList) {
      state.todoList = todoList
    }
  },
  actions: {
    clearCompleted({ commit, getters }) {
      commit('setTodoList', getters.activeTodos)
    }
  }
})

export default store