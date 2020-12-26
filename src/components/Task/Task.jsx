import React, {useState} from "react";
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = ({ label, onDeleted, onToggleCompleted, onToggleEdit, edit, completed, date, min, sec}) => {

    const [count, setCount] = useState(+min * 60 + +sec);
    const [play, setPlay] = useState(false)
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
        setPlay(true);
    }

    const onPause = () => {
        setPlay(false);
    }

    const timerChange = () => {
        setCount(count - 1);
    }

    const timer = () => {
        const result = `${Math.floor(count / 60)}:${count - Math.floor(count / 60) * 60}`;
        if (play) {
            setInterval(timerChange, 1000);
        }
        console.log(count);
        return result;
    }

    return (
        <li className={classNames}>
            <div className="view">
                <input onClick = {onToggleCompleted} className="toggle" type="checkbox" checked = {check}/>
                <label>
                    <span className="title">{label}</span>
                    <span className="description">
                        <button onClick = {onPlay} type = "button" className="icon icon-play" aria-label="play" />
                        <button onClick = {onPause} type = "button" className="icon icon-pause" aria-label="pause" />
                        {timer()}
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
}
Task.propTypes = {
    label: PropTypes.string,
    onDeleted: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    onToggleEdit: PropTypes.func,
    edit: PropTypes.bool,
    completed: PropTypes.bool,
    date: PropTypes.func,
    min: PropTypes.string,
    sec: PropTypes.string,
}
export default Task;