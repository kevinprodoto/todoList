import React from 'react';
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
  export default TaskList;