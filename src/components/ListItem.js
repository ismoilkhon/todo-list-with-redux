import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { EditIcon, DeleteIcon, CheckIcon, MinusIcon, CloseIcon } from '@chakra-ui/icons'
import { Flex, Input, IconButton, Text, ButtonGroup, InputGroup, InputRightAddon } from '@chakra-ui/react'
import { editTodo, removeTodo, toggleTodo } from '../store/todosSlice'

export function ListItem({ id, text, completed }) {
	const dispatch = useDispatch()
	const [value, setValue] = useState(text)
	const [isEditable, setIsEditable] = useState(false)

	function handleEnterPress(e) {
		if (e.charCode === 13) {
			handleEdit()
		}
	}

	function handleDelete() {
		dispatch(removeTodo(id))
	}

	function handleToggleCompleted() {
		dispatch(toggleTodo(id))
	}

	function handleEdit() {
		setIsEditable(false)
		dispatch(editTodo(value))
	}

	return (
		<Flex justifyContent='space-between' alignItems='center' pb={2} pt={2}>
			{completed
				? <Text isTruncated as='s'>{text}</Text>
				: (
					<InputGroup>
						<Input
							placeholder='Edit todo'
							isDisabled={!isEditable}
							onKeyPress={handleEnterPress}
							value={isEditable ? value : text}
							variant={isEditable ? 'outline' : 'unstyled'}
							onChange={e => setValue(e.nativeEvent.target.value)}
						/>
						{isEditable && (
							<InputRightAddon as='button' p='0'>
								<IconButton icon={<CheckIcon w='3' h='3'/>} onClick={handleEdit}/>
								<IconButton
									icon={<CloseIcon w='3' h='3'/>}
									onClick={() => setIsEditable(false)}
								/>
							</InputRightAddon>
						)}
					</InputGroup>
				)
			}
			<ButtonGroup ml={2}>
				{!completed && !isEditable
					&& <IconButton icon={<EditIcon color='teal'/>} onClick={() => setIsEditable(true)}/>
				}
				<IconButton icon={<DeleteIcon color='red.300'/>} onClick={handleDelete}/>
				<IconButton
					onClick={handleToggleCompleted}
					icon={completed ? <MinusIcon/> : <CheckIcon color='green.400'/>}
				/>
			</ButtonGroup>
		</Flex>
	)
}
