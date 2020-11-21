import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from "./components/NewTaskForm/NewTaskForm"
import TaskList from "./components/TaskList/TaskList";

export default class App extends Component  {
  maxId = 100; 
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch")
    ],
    filter: "All",
    search: ""
  }
  filterItems(todoData, filter) {
    switch(filter) {
      case "All":
        return todoData;
       case "Active": 
        return todoData.filter((item) => !item.completed);
      case "Completed": 
        return todoData.filter((item) => item.completed);
      default:
        return todoData;   
    }
  }
  searchItems(todoData, search) {
    if (search.length === 0) {
      return todoData;
    }

    return todoData.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }
  createTodoItem(label) {
    return {
      label, 
      edit: false,
      completed: false,
      id: this.maxId++
    }
  }
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id=== id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      return {
        todoData: newArray
      }
    })
  }
  deleteAllCompleted = () => {
    this.setState(({todoData}) => {
      const newArray = [...todoData];
      newArray.forEach(item => {
        if (item.completed) {
          this.deleteItem(item.id);
        }
        return {
          todoData: newArray
        }       
      });
    })
  }
  addItem = (text) => {
    console.log("added", text)
    const newItem = this.createTodoItem(text);
    this.setState(({todoData}) => {
      const newArray = [...todoData, newItem]
      return {
        todoData: newArray
      }
    })
  }
  toggleProp(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }
  onToggleCompleted = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProp(todoData, id, "completed")
      }
    })
  }
  onToggleEdit = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProp(todoData, id, "edit")
      }
    })
  }
  onFilterChange = (filter) => {
    this.setState({filter})
  }
  render() {
    const { todoData, filter, search } = this.state;
    const completedCount = this.state.todoData.filter((el) => el.completed).length;
    const todoCount = this.state.todoData.length - completedCount;
    const visibleItems = this.searchItems(this.filterItems(todoData, filter), search);
    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded={this.addItem}/>
        <TaskList 
        todos = {visibleItems}
        onDeleted ={this.deleteItem}
        onToggleCompleted={this.onToggleCompleted}
        onToggleEdit={this.onToggleEdit}
        onClearAll={this.deleteAllCompleted}
        todoCount={todoCount}
        filter = {this.state.filter}
        onFilterChange = {this.onFilterChange}/>
      </section>
    );
  }

}
  
  ReactDOM.render(<App />, document.getElementById('root'));