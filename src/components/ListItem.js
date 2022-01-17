import { useState } from 'react'
import { Flex, Input, IconButton, Text, ButtonGroup } from '@chakra-ui/react'
import { EditIcon, DeleteIcon, CheckIcon, MinusIcon, LockIcon } from '@chakra-ui/icons'

export function ListItem({ text }) {
	const [isComplete, setIsComplete] = useState(true)
	const [isEditable, setIsEditable] = useState(false)

	return (
		<Flex justifyContent='space-between' alignItems='center' pb={2} pt={2}>
			{isComplete
				? <Text isTruncated as='s'>{text}</Text>
				: (
					<Input
						value={text}
						isDisabled={!isEditable}
						variant={isEditable ? 'outline' : 'unstyled'}
					/>
				)
			}
			<ButtonGroup ml={4}>
				<IconButton icon={<DeleteIcon/>}/>
				{!isComplete && (
					<IconButton
						onClick={() => setIsEditable(prev => !prev)}
						icon={isEditable ? <LockIcon/> : <EditIcon/>}
					/>
				)}
				<IconButton
					onClick={() => setIsComplete(prev => !prev)}
					icon={isComplete ? <MinusIcon/> : <CheckIcon/>}
				/>
			</ButtonGroup>
		</Flex>
	)
}
