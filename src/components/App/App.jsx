import React from 'react';
import PropTypes from 'prop-types';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';


const App = ({addItem, visibleItems, deleteItem, onToggleCompleted, onToggleEdit, deleteAllCompleted, todoCount, filter, onFilterChange}) => {
    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded={addItem}/>
        <TaskList 
        todos = {visibleItems}
        onDeleted ={deleteItem}
        onToggleCompleted={onToggleCompleted}
        onToggleEdit={onToggleEdit}
        onClearAll={deleteAllCompleted}
        todoCount={todoCount}
        filter = {filter}
        onFilterChange = {onFilterChange}/>
      </section>
    );
  }

  App.defaultProps = {
    addItem: () => {},
    visibleItems: [],
    onToggleCompleted: () => {},
    onToggleEdit: () => {},
    deleteAllCompleted: () => {},
    deleteItem: () => {},
    onFilterChange: () => {},
    todoCount: 3,
    filter: "All",
}

  App.propTypes = {
    addItem: PropTypes.func,
    visibleItems: PropTypes.instanceOf(Array),
    onToggleCompleted: PropTypes.func,
    onToggleEdit: PropTypes.func,
    deleteAllCompleted: PropTypes.func,
    deleteItem: PropTypes.func,
    todoCount: PropTypes.number,
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
  }
export default App;
