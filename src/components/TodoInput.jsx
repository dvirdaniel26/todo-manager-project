import { useState } from 'react'

function TodoInput({ onAdd }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim()) {
            onAdd(text)
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="todo-input-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What needs to be done?"
                className="todo-input"
                autoFocus
            />
            <button type="submit" className="add-button">Add</button>
        </form>
    )
}

export default TodoInput
