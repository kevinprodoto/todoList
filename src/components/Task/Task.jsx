import React from "react";
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = ({ label, onDeleted, onToggleCompleted, onToggleEdit, edit, completed}) => {

        let classNames = "";
        if (completed) {
            classNames = "completed"
        }
        if (edit) {
            classNames = "edit"
        }
        return (
            <li className={classNames}>
                <div className="view">
                    <input onClick = {onToggleCompleted} className="toggle" type="checkbox"/>
                    <label>
                        <span className="description">{label}</span>
                        <span className="created">{formatDistanceToNow(new Date(), {addSuffix: true})}</span>
                    </label>
                    <button type = "button" aria-label="edit" className="icon icon-edit" onClick={onToggleEdit} />
                    <button type = "button" aria-label="destroy" className="icon icon-destroy" onClick={onDeleted} />
                </div>
            </li>
        )
};
Task.defaultProps = {
    label: "",
    onDeleted: () => {},
    onToggleCompleted: () => {},
    onToggleEdit: () => {},
    edit: false,
    completed: false
}
Task.propTypes = {
    label: PropTypes.string,
    onDeleted: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    onToggleEdit: PropTypes.func,
    edit: PropTypes.bool,
    completed: PropTypes.bool
}
export default Task;