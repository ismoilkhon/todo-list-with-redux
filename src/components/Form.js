import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todosSlice'
import { Input, Flex, Button } from '@chakra-ui/react'

export function Form() {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')

	function handleEnterPress(e) {
		if (e.charCode === 13) {
			handleAddTodo()
		}
	}

	function handleAddTodo() {
		if (value) {
			dispatch(addTodo(value))
			setValue('')
		}
	}

	return (
		<Flex mt={10} mb={10}>
			<Input
				mr={4}
				value={value}
				variant='filled'
				placeholder='Add todo'
				onKeyPress={handleEnterPress}
				onChange={e => setValue(e.nativeEvent.target.value)}
			/>
			<Button variant='solid' colorScheme='teal' onSubmit={handleAddTodo}>Add Todo</Button>
		</Flex>
	)
}
