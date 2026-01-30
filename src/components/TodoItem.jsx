import { useState } from 'react'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const handleEdit = () => {
        if (editText.trim()) {
            onEdit(todo.id, editText)
            setIsEditing(false)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleEdit()
        }
    }

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />

            {/* Conditionally render input for editing or span for display based on isEditing state */}
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleEdit}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className="edit-input"
                />
            ) : (
                <span
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1, marginLeft: '10px' }}
                >
                    {todo.text}
                </span>
            )}

            <button onClick={() => setIsEditing(true)} className="edit-button">
                Edit
            </button>

            <button onClick={() => onDelete(todo.id)} className="delete-button">
                Delete
            </button>
        </li>
    )
}

export default TodoItem
