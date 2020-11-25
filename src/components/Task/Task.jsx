import React, { Component } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends Component {
    render() {
        const { label, onDeleted, 
            onToggleCompleted, 
            onToggleEdit, 
            edit, completed} = this.props;

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
                    <button className="icon icon-edit" onClick={onToggleEdit} />
                    <button className="icon icon-destroy" onClick={onDeleted} />
                </div>
            </li>
        )
    };
};
