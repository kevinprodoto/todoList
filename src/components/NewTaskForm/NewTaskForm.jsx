import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {

    state = {
        label: ""
    }

    onLabelChange = (evv) => {
        this.setState({
            label: evv.target.value
        })
    }

    onSubmit = (evv) => {
        evv.preventDefault();
        const{label} = this.state;
        const {onItemAdded} = this.props;
        if (label !== "") {
            onItemAdded(label)
            this.setState({
                label: ""
            })
        }
    }

    render() {
        const searchText = "What needs to be done?";
        const{label} = this.state;
        return (
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onLabelChange}
                    className="new-todo" 
                    placeholder={ searchText } 
                    value={label}/>
                </form>
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