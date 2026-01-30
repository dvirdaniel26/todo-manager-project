import TodoItem from './TodoItem'

function TodoList({ todos }) {
    if (todos.length === 0) {
        return <p className="empty-message">No tasks yet!</p>
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList
