# Todo Manager Application

A React-based task management application developed as a summary project. The app allows users to add, manage, filter, and persist tasks using LocalStorage.

## Instructions for Running the Project

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/dvirdaniel26/todo-manager-project.git
    cd todo-manager-project
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  Open your browser at the URL shown in the terminal (usually `http://localhost:5173`).

## Running Unit Tests

This project includes unit tests for core components using **Vitest** and **React Testing Library**. To run them:

```bash
npm test
```

## Features & Design

*   **Premium Coffee Theme**: Custom "Outfit" font, warm color palette, and smooth animations.
*   **Data Persistence**: Automatically saves your tasks to LocalStorage.
*   **Task Management**: Create, read, update, and delete (CRUD) tasks.
*   **Smart Filtering**: Filter by Active/Completed and see real-time counters.
*   **Bonus**: Includes a "Clear Completed" button and full unit test coverage.

## Component Structure & Responsibilities

*   **App**: The main container component that manages the application state (`todos`, `filter`) and handles data persistence.
*   **TodoInput**: Handles user input for creating new tasks.
*   **TodoList**: Renders the list of task items based on the current filter.
*   **TodoItem**: Displays a single task, handles the edit mode, and triggers toggle/delete actions.
*   **Filters**: Displays filter buttons (All/Active/Completed), the active task counter, and the "Clear Completed" button.

## Known Limitations / Bugs

*   None known at this time.
