import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        todos: []
    },
    mutations: {
        getTodos(state, payload) {
            state.todos = payload
        },

        postTodo(state, payload) {
            state.todos.unshift(payload)
        },

        updateTodo(state, payload) {
            const index = state.todos.findIndex(todo => todo.id === payload.id)

            if (index < 0) return

            state.todos.splice(index, 1, payload)
        },

        deleteTodo(state, id) {
            const index = state.todos.findIndex(todo => todo.id === id)

            if (index < 0) return

            state.todos.splice(index, 1)
        },
    },
    getters: {},
    actions: {
        getTodos({ commit }) {
            return axios.get('http://localhost:3000/todos').then((response) => {
                commit('getTodos', response.data)
            })
        },

        postTodo({ commit }, data) {
            return axios.post('http://localhost:3000/todos', data).then((response) => {
                commit('postTodo', response.data)
            })
        },

        updateTodo({ commit }, {id, data}) {
            return axios.put(`http://localhost:3000/todos/${id}`, data).then((response) => {
                commit('updateTodo', response.data)
            })
        },

        deleteTodo({ commit }, id) {
            return axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
                commit('deleteTodo', id)
            })
        },
    },
    modules: {},
})

export default store