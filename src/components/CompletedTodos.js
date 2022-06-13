import { Title } from './Title'
import { Empty } from './Empty'
import { ListItem } from './ListItem'
import { useSelector } from 'react-redux'

export function CompletedTodos() {
	const todos = useSelector(store => store?.todos?.filter(item => item.completed))
	return (
		<>
			<Title text='Completed'/>
			{!todos.length && <Empty/>}
			{todos?.map(todo => <ListItem key={todo.id} {...todo}/>)}
		</>
	)
}
