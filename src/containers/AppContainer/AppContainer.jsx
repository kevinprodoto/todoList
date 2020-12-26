import React, { Component } from 'react';

import {createTodoItem, searchItems, filterItems} from "../../tools/todo-processing";

import App from "../../components/App/App"

export default class AppContainer extends Component {

    state = {
      todoData: [
        createTodoItem('Drink Coffee', "00", "00"),
        createTodoItem('Make Awesome App', "00", "00"),
        createTodoItem('Have a lunch', "00", "00"),
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
  
    addItem = (text, min, sec) => {
      const newItem = createTodoItem(text, min, sec);
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
  
      const visibleItems = searchItems(filterItems(todoData, filter), search);
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