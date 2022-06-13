import { useState } from 'react'
import { useStore } from '../store'
import { EditIcon, DeleteIcon, CheckIcon, MinusIcon, CloseIcon } from '@chakra-ui/icons'
import { Flex, Input, IconButton, Text, ButtonGroup, InputGroup, InputRightAddon } from '@chakra-ui/react'

export function ListItem({ id, text, isComplete }) {
	const [value, setValue] = useState(text)
	const [isEditable, setIsEditable] = useState(false)
	const { editTodo, deleteTodo, toggleTodo } = useStore()

	function handleEnterPress(e) {
		if (e.charCode === 13) {
			handleEdit()
		}
	}

	function handleEdit() {
		editTodo(id, value)
		setIsEditable(false)
	}

	return (
		<Flex justifyContent='space-between' alignItems='center' pb={2} pt={2}>
			{isComplete
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
				{!isComplete && !isEditable
					&& <IconButton icon={<EditIcon color='teal'/>} onClick={() => setIsEditable(true)}/>
				}
				<IconButton icon={<DeleteIcon color='red.300'/>} onClick={() => deleteTodo(id)}/>
				<IconButton
					onClick={() => toggleTodo(id)}
					icon={isComplete ? <MinusIcon/> : <CheckIcon color='green.400'/>}
				/>
			</ButtonGroup>
		</Flex>
	)
}
