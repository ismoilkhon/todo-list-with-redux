import storage from 'redux-persist/lib/storage'
import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

// eslint-disable-next-line default-param-last
function todosReducer(state = [], { type, payload }) {
	switch (type) {
	case 'ADD_TODO':
		return [...state, payload]
	case 'DELETE_TODO':
		return state?.filter(item => item.id !== payload)
	case 'EDIT_TODO':
		return state?.map(item => item.id === payload.id ? { ...item, text: payload.text } : item)
	case 'TOGGLE_COMPLETED':
		return state?.map(item => item.id === payload ? { ...item, isComplete: !item.isComplete } : item)
	default:
		return state
	}
}

export const selectors = {
	getTodos: state => state?.todos?.filter(item => !item.isComplete),
	getCompletedTodos: state => state?.todos?.filter(item => item.isComplete),
}

export const actions = {
	addTodo: payload => ({ type: 'ADD_TODO', payload }),
	editTodo: payload => ({ type: 'EDIT_TODO', payload }),
	deleteTodo: payload => ({ type: 'DELETE_TODO', payload }),
	toggleCompleted: payload => ({ type: 'TOGGLE_COMPLETED', payload }),
}

export const store = createStore(
	persistReducer(
		{ storage, key: 'root' },
		combineReducers({ todos: todosReducer }),
	),
)
export const persistor = persistStore(store)
