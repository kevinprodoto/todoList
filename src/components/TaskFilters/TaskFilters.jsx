import React, {Component} from "react";

export default class  TaskFilters extends Component {
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
                    <li className = {clazz}><button onClick = {() => onFilterChange(name)}>{label}</button></li>
                )
        })
        return (
            <ul className="filters">
                {buttons}
            </ul>
        )
    }

}