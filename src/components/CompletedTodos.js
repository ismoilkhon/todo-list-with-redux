import { Title } from './Title'
import { Empty } from './Empty'
import { selectors } from '../store'
import { ListItem } from './ListItem'
import { useSelector } from 'react-redux'

export function CompletedTodos() {
	const todos = useSelector(selectors.getCompletedTodos)
	return (
		<>
			<Title text='Completed'/>
			{!todos.length && <Empty/>}
			{todos?.map(todo => <ListItem key={todo.id} {...todo}/>)}
		</>
	)
}
