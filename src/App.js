import { Form } from './components/Form'
import { Todos } from './components/Todos'
import { Container } from '@chakra-ui/react'
import { CompletedTodos } from './components/CompletedTodos'

export function App() {
	return (
		<Container w='60vw'>
			<Form/>
			<Todos/>
			<CompletedTodos/>
		</Container>
	)
}
