function Filters({ currentFilter, setFilter, activeCount, onClearCompleted }) {
    return (
        <div className="filters-container">
            <div className="todo-count">
                <strong>{activeCount}</strong> items left
            </div>

            <div className="filters">
                <button
                    className={currentFilter === 'all' ? 'selected' : ''}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={currentFilter === 'active' ? 'selected' : ''}
                    onClick={() => setFilter('active')}
                >
                    Active
                </button>
                <button
                    className={currentFilter === 'completed' ? 'selected' : ''}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
            </div>

            <button className="clear-completed" onClick={onClearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default Filters
