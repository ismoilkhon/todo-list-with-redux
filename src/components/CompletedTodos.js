import { Title } from './Title'
import { Empty } from './Empty'
import { useStore } from '../store'
import { ListItem } from './ListItem'

export function CompletedTodos() {
	const { todos } = useStore()
	return (
		<>
			<Title text='Completed'/>
			{!todos.length && <Empty/>}
			{todos?.filter(todo => todo.isComplete)?.map(todo => <ListItem key={todo.id} {...todo}/>)}
		</>
	)
}
