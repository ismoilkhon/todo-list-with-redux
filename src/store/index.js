import { v4 as uuid } from 'uuid'
import { createContext, useContext, useEffect, useState } from 'react'

const StoreContext = createContext()

export function StoreProvider({ children }) {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todos'))

		if (saved?.length > 0) {
			setTodos(saved)
		}
	}, [])

	function deleteTodo(id) {
		setTodos(prev => prev.filter(todo => todo.id !== id))
	}

	function addTodo(text) {
		setTodos(prev => [...prev, { id: uuid(), text, isComplete: false }])
	}

	function editTodo(id, text) {
		setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, text } : todo))
	}

	function toggleTodo(id) {
		setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, isComplete: !prev.isComplete } : todo))
	}

	return (
		<StoreContext.Provider
			value={{
				todos,
				addTodo,
				editTodo,
				deleteTodo,
				toggleTodo,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export const useStore = () => useContext(StoreContext)
