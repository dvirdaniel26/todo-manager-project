import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete, onEdit }) {
    if (todos.length === 0) {
        return (
            <div className="empty-message">
                <div style={{ fontSize: '40px', marginBottom: '10px', opacity: 0.5 }}>☕</div>
                <p>All caught up! Time for a coffee break.</p>
            </div>
        )
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    )
}

export default TodoList
