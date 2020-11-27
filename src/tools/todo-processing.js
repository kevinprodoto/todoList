
const Tools = {
  maxId: 100,
  createTodoItem: (label) => {
    Tools.maxId += 1;
    return {
      label, 
      edit: false,
      completed: false,
      id: Tools.maxId
    }
  },

  searchItems: (todoData, search) => {
      if (search.length === 0) {
        return todoData;
      }

      return todoData.filter((item) => {
        return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
  },

  filterItems: (todoData, filter) => {
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
  },
}
export default Tools;