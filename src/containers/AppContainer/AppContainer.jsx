import React, { Component } from 'react';

import Tools from "../../tools/todo-processing";

import App from "../../components/App/App"

export default class AppContainer extends Component {

    state = {
      todoData: [
        Tools.createTodoItem('Drink Coffee'),
        Tools.createTodoItem('Make Awesome App'),
        Tools.createTodoItem('Have a lunch'),
      ],
      filter: 'All',
      search: '',
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
      const newItem = Tools.createTodoItem(text);
      this.setState(({todoData}) => {
        const newArray = [...todoData, newItem]
        return {
          todoData: newArray
        }
      })
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
  
    toggleProp = (arr, id, propName) => {
      const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
    }
    
    render() {
      
      const {todoData, filter, search} = this.state;
      const completedCount = todoData.filter((el) => el.completed).length;

      const todoCount = todoData.length - completedCount;
  
      const visibleItems = Tools.searchItems(Tools.filterItems(todoData, filter), search);
      return <App addItem = {this.addItem}
                  visibleItems = {visibleItems}
                  deleteItem = {this.deleteItem}
                  onToggleCompleted = {this.onToggleCompleted}
                  onToggleEdit = {this.onToggleEdit}
                  deleteAllCompleted = {this.deleteAllCompleted}
                  todoCount = {todoCount}
                  filter = {filter}
                  onFilterChange = {this.onFilterChange}/>
    }
  }