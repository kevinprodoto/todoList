import React from 'react';
import PropTypes from 'prop-types';
import Task from "../Task/Task";
import Footer from "../Footer/Footer"

const TaskList = ({todos, onDeleted, onToggleCompleted, onToggleEdit, todoCount, onClearAll, filter, onFilterChange}) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps} = item;

        return (
            <Task key ={id} {...itemProps} 
            onDeleted={() => onDeleted(id)}
            onToggleCompleted={() => onToggleCompleted(id)}
            onToggleEdit={() => onToggleEdit(id)}/>
        )
    })

    return (
        <section className="main">
            <ul className="todo-list">
                { elements }
            </ul>
            <Footer todoCount={todoCount}
                    onClearAll={onClearAll}
                    filter = {filter}
                    onFilterChange = {onFilterChange}/>
        </section>
    )
}
TaskList.defaultProps = {
    todos: [],
    onDeleted: () => {},
    onToggleCompleted: () => {},
    onToggleEdit: () => {},
    onClearAll: () => {},
    onFilterChange: () => {},
    todoCount: 0,
    filter: "All",
    map: () => {},
}

TaskList.propTypes = {
    onDeleted: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    onToggleEdit: PropTypes.func,
    onClearAll: PropTypes.func,
    onFilterChange: PropTypes.func,
    filter: PropTypes.string,
    map: PropTypes.func,
    todos: PropTypes.node,
    todoCount: PropTypes.number,
}
  export default TaskList;