import { Title } from './Title'
import { Empty } from './Empty'
import { selectors } from '../store'
import { ListItem } from './ListItem'
import { useSelector } from 'react-redux'

export function Todos() {
	const todos = useSelector(selectors.getTodos)

	return (
		<>
			<Title text='Todo' colorScheme='teal'/>
			{!todos.length && <Empty/>}
			{todos?.map(todo => <ListItem key={todo.id} {...todo}/>)}
		</>
	)
}
