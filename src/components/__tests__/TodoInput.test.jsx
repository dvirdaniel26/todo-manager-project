import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TodoInput from '../TodoInput'

describe('TodoInput Component', () => {
  it('renders input and button', () => {
    render(<TodoInput onAdd={() => { }} />)

    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument()
  })

  it('updates input value on change', () => {
    render(<TodoInput onAdd={() => { }} />)

    const input = screen.getByPlaceholderText('What needs to be done?')
    fireEvent.change(input, { target: { value: 'New Task' } })

    expect(input.value).toBe('New Task')
  })

  it('calls onAdd when form is submitted with text', () => {
    const mockOnAdd = vi.fn()
    render(<TodoInput onAdd={mockOnAdd} />)

    const input = screen.getByPlaceholderText('What needs to be done?')
    const button = screen.getByRole('button', { name: /add/i })

    fireEvent.change(input, { target: { value: 'Buy Milk' } })
    fireEvent.click(button)

    expect(mockOnAdd).toHaveBeenCalledWith('Buy Milk')
    expect(input.value).toBe('') // Should clear input after add
  })

  it('does not call onAdd when input is empty', () => {
    const mockOnAdd = vi.fn()
    render(<TodoInput onAdd={mockOnAdd} />)

    const button = screen.getByRole('button', { name: /add/i })
    fireEvent.click(button)

    expect(mockOnAdd).not.toHaveBeenCalled()
  })
})
