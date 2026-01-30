function TodoItem({ todo }) {
    return (
        <li className="todo-item">
            <span>{todo.text}</span>
        </li>
    )
}

export default TodoItem
