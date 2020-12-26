import React, {useState} from "react";
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = ({ label, onDeleted, onToggleCompleted, onToggleEdit, edit, completed, date, play, min, sec, onTogglePlay}) => {

    const [count, setCount] = useState(+min * 60 + +sec);
    let check =  "";
    let classNames = "";
    if (completed) {
        classNames = "completed";
        check = "checked"
    }
    if (edit) {
        classNames = "edit"
    }

    const onPlay = () => {
        setCount(count - 1)
    }

    if (play) {
        setInterval(onPlay(), 1000)
    }

    return (
        <li className={classNames}>
            <div className="view">
                <input onClick = {onToggleCompleted} className="toggle" type="checkbox" checked = {check}/>
                <label>
                    <span className="title">{label}</span>
                    <span className="description">
                        <button onClick = {onTogglePlay} type = "button" className="icon icon-play" aria-label="play" />
                        <button type = "button" className="icon icon-pause" aria-label="pause" />
                        {`${Math.floor(count / 60)}:${count - Math.floor(count / 60) * 60}`}
                    </span>
                    <span className="description">{formatDistanceToNow(date, {addSuffix: true})}</span>
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
    completed: false,
    date: new Date(),
    min: "00",
    sec: "00",
    play: false,
    onTogglePlay: () => {},
}
Task.propTypes = {
    onTogglePlay: PropTypes.func,
    label: PropTypes.string,
    onDeleted: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    onToggleEdit: PropTypes.func,
    edit: PropTypes.bool,
    completed: PropTypes.bool,
    date: PropTypes.func,
    min: PropTypes.string,
    sec: PropTypes.string,
    play: PropTypes.bool,
}
export default Task;