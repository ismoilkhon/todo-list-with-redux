import { nanoid } from 'nanoid'
import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			state.push({
				id: nanoid(),
				completed: false,
				text: action.payload,
			})
		},
		toggleTodo: (state, action) => {
			const todo = state.find(item => item.id === action.payload)
			todo.completed = !todo.completed
		},
		editTodo: (state, action) => {
			state?.map(item => item.id === state.id ? { ...item, text: action.payload } : item)
		},
		removeTodo: (state, action) => {
			const index = state.findIndex(todo => todo.id === action.payload)
			state.splice(index, 1)
		},
	},
})

export const { addTodo, toggleTodo, removeTodo, editTodo } = todosSlice.actions
export default todosSlice.reducer
