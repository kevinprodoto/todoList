import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class TaskFilters extends Component {

    buttons = [
        {name: "All", label: "All", key: 1},
        {name: "Active", label: "Active", key: 2},
        {name: "Completed", label: "Completed", key: 3}
    ]

    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, label, key}) => {
            const isSelected = filter === name;
            const clazz = isSelected ? "selected" : "";
                return (
                    <li key = {key} className = {clazz}><button type = "button" onClick = {() => onFilterChange(name)}>{label}</button></li>
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