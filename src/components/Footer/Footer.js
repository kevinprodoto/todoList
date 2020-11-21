import React from "react";
import TaskFilters from "../TaskFilters/TaskFilters";

const Footer = ({todoCount, onClearAll, filter, onFilterChange}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{todoCount} items left</span>
                <TaskFilters filter = {filter} onFilterChange = {onFilterChange}/>
            <button onClick={onClearAll} className="clear-completed">Clear completed</button>
        </footer>
    )
}
export default Footer;