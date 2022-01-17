import { Form } from './components/Form'
import { Title } from './components/Title'
import { ListItem } from './components/ListItem'
import { ChakraProvider, Container, Box } from '@chakra-ui/react'

export function App() {
	return (
		<ChakraProvider>
			<Container centerConten w='60vw'>
				<Form/>
				<Title text='Todo' colorScheme='teal'/>
				<Box>
					<ListItem/>
					<ListItem/>
					<ListItem/>
				</Box>
				<Title text='Completed' colorScheme='teal'/>
				<Box>
					<ListItem/>
					<ListItem/>
					<ListItem/>
				</Box>
			</Container>
		</ChakraProvider>
	)
}
