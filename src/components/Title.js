import { Flex, Divider, Text } from '@chakra-ui/react'

export function Title({ text, colorScheme }) {
	return (
		<Flex alignItems='center'>
			<Divider variant='dashed' colorScheme={colorScheme}/>
			<Text as='samp' ml={2} mr={2}>{text}</Text>
			<Divider variant='dashed' colorScheme={colorScheme}/>
		</Flex>
	)
}
