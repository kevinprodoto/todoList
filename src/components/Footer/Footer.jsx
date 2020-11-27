import React from "react";
import PropTypes from 'prop-types';
import TaskFilters from "../TaskFilters/TaskFilters";

const Footer = ({todoCount, onClearAll, filter, onFilterChange}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{todoCount} items left</span>
                <TaskFilters filter = {filter} onFilterChange = {onFilterChange}/>
            <button type = "button" onClick={onClearAll} className="clear-completed">Clear completed</button>
        </footer>
    )
}

Footer.defaultProps = {
    todoCount: 0,
    filter: "All",
    onClearAll: () => {},
    onFilterChange: () => {},
}
Footer.propTypes = {
    onClearAll: PropTypes.func,
    onFilterChange: PropTypes.func,
    filter: PropTypes.string,
    todoCount: PropTypes.number
}
export default Footer;