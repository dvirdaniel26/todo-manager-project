import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TodoItem from '../TodoItem'

describe('TodoItem Component', () => {
  const mockTodo = {
    id: 1,
    text: 'Test Task',
    completed: false
  }
  const mockOnToggle = vi.fn()
  const mockOnDelete = vi.fn()
  const mockOnEdit = vi.fn()

  it('renders todo text', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} onEdit={mockOnEdit} />)
    expect(screen.getByText('Test Task')).toBeInTheDocument()
  })

  it('calls onToggle when checkbox is clicked', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} onEdit={mockOnEdit} />)

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(mockOnToggle).toHaveBeenCalledWith(1)
  })

  it('calls onDelete when delete button is clicked', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} onEdit={mockOnEdit} />)

    const deleteButton = screen.getByRole('button', { name: /delete/i })
    fireEvent.click(deleteButton)

    expect(mockOnDelete).toHaveBeenCalledWith(1)
  })

  it('enters edit mode when edit button is clicked', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} onEdit={mockOnEdit} />)

    const editButton = screen.getByRole('button', { name: /edit/i })
    fireEvent.click(editButton)

    // Should show input now
    expect(screen.getByDisplayValue('Test Task')).toBeInTheDocument()
  })
})
