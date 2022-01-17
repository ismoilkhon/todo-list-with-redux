import { Input, Flex, Button } from '@chakra-ui/react'

export function Form() {
	return (
		<Flex mt={10} mb={10}>
			<Input variant='filled' placeholder='Filled' mr={4}/>
			<Button variant='solid' colorScheme='teal'>Add Todo</Button>
		</Flex>
	)
}
