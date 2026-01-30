# Product Requirements Document (PRD) - React Todo App

## 1. Goal Description
Development of a functional Todo Manager application using React. The app will allow users to manage tasks with features like adding, editing, deleting, and filtering. Data will be persisted properly using `localStorage`.

## 2. Functional Requirements

### 2.1 Tasks (Todos)
- Add new task with text description.
- Mark task as completed/incomplete.
- Edit existing task description.
- Delete task.

### 2.2 Filtering
- Filter to show "All" tasks.
- Filter to show "Active" tasks (incomplete).
- Filter to show "Completed" tasks.
- Visual indication of the active filter.

### 2.3 Data Persistence
- Save all tasks to `localStorage`.
- Restore tasks from `localStorage` on app load.
- Update `localStorage` on any change (add, edit, delete, toggle).

### 2.4 Counters & Actions
- Counter for remaining active tasks.
- "Clear Completed" button to delete all completed tasks at once.

## 3. Technical Requirements

- **Framework**: React (Vite)
- **Language**: JavaScript (ES6+)
- **State Management**: React Hooks only (`useState`, `useEffect`) - No external libraries.
- **Styling**: Clean and modular CSS.
- **Project Structure**: Modular component-based architecture.

## 4. Component Architecture

### `App.jsx` (Main Container)
- **State**: `todos`, `filter`.
- **Responsibilities**: 
  - Manage state.
  - Handle `localStorage` syncing.
  - Define handler functions (`addTodo`, `deleteTodo`, `toggleTodo`, `clearCompleted`).
  - Render logical sections.

### `TodoInput.jsx`
- **Props**: `onAdd`
- **Responsibilities**: Controlled input field for adding new tasks.

### `TodoList.jsx`
- **Props**: `todos`, `onDelete`, `onToggle`, `onEdit`
- **Responsibilities**: Render list of `TodoItem`s.

### `TodoItem.jsx`
- **Props**: `todo`, `onDelete`, `onToggle`, `onEdit`
- **Responsibilities**: Display individual task, checkbox, and delete button. Handle edit mode.

### `Filters.jsx`
- **Props**: `currentFilter`, `setFilter`, `activeCount`, `onClearCompleted`
- **Responsibilities**: Filter buttons and footer actions.

## 5. Data Model

**Todo Object**:
```javascript
{
  id: Number (Date.now()),
  text: String,
  completed: Boolean
}
```
