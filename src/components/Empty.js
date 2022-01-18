import { Center, Text } from '@chakra-ui/react'

export function Empty() {
	return (
		<Center>
			<Text my={6} color='gray.300'>Your list is empty</Text>
		</Center>
	)
}
