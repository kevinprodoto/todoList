import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {

    state = {
        label: "",
        min: "",
        sec: "",
    }

    onMinChange = (evv) => {
        this.setState({
            min: evv.target.value
        })
    }

    onSecChange = (evv) => {
        this.setState({
            sec: evv.target.value
        })
    }

    onLabelChange = (evv) => {
        this.setState({
            label: evv.target.value
        })
    }

    onSubmit = (evv) => {
        evv.preventDefault();
        const{label, min, sec} = this.state;
        const {onItemAdded} = this.props;
        if (label !== "") {
            onItemAdded(label, min, sec)
            this.setState({
                label: "",
                min: "",
                sec: "",
            })
        }
    }

    render() {
        const searchText = "What needs to be done?";
        const{label, min, sec} = this.state;
        return (
            <header className="header">
                <h1>todos</h1>
                <div className = "new-todo-form">
                    <form onSubmit={this.onSubmit}>
                        <input onChange={this.onLabelChange}
                        className="new-todo" 
                        placeholder={ searchText } 
                        value={label}/>
                    </form>
                    <form className = "todoForm" onSubmit={this.onSubmit}><input className="new-todo-form__timer" placeholder="Min" onChange = {this.onMinChange} value = {min} /></form>
                    <form className = "todoForm" onSubmit={this.onSubmit}><input className="new-todo-form__timer" placeholder="Sec" onChange = {this.onSecChange} value = {sec} /></form>
                </div>
            </header>
        ) 
    }
};
NewTaskForm.defaultProps = {
    onItemAdded: () => {},
  }

  NewTaskForm.propTypes = {
    onItemAdded: PropTypes.func,
  }