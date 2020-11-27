import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class TaskFilters extends Component {

    buttons = [
        {name: "All", label: "All"},
        {name: "Active", label: "Active"},
        {name: "Completed", label: "Completed"}
    ]

    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isSelected = filter === name;
            const clazz = isSelected ? "selected" : "";
                return (
                    <li className = {clazz}><button type = "button" onClick = {() => onFilterChange(name)}>{label}</button></li>
                )
        })
        return (
            <ul className="filters">
                {buttons}
            </ul>
        )
    }
}
TaskFilters.defaultProps = {
    onFilterChange: () => {},
    filter: "All",
}
TaskFilters.propTypes = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
  }