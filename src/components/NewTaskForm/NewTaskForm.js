import React, {Component} from 'react';
export default class NewTaskForm extends Component {
    state = {
        label: ""
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label !== "") {
            this.props.onItemAdded(this.state.label)
            this.setState({
                label: ""
            })
        }
    }
    render() {
        const searchText = "What needs to be done?";
        return (
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onLabelChange}
                    className="new-todo" 
                    placeholder={ searchText } 
                    autoFocus
                    value={this.state.label}/>
                </form>
            </header>
        ) 
    }
};