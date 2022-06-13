import { Title } from './Title'
import { Empty } from './Empty'
import { ListItem } from './ListItem'
import { useSelector } from 'react-redux'

export function Todos() {
	const todos = useSelector(store => store?.todos?.filter(item => !item.completed))

	return (
		<>
			<Title text='Todo' colorScheme='teal'/>
			{!todos.length && <Empty/>}
			{todos?.map(todo => <ListItem key={todo.id} {...todo}/>)}
		</>
	)
}
