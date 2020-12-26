  let maxId = 100;
  export const createTodoItem = (label, min, sec) => {
    maxId += 1;
    return {
      label, 
      edit: false,
      completed: false,
      id: maxId,
      date: new Date(),
      count: +min * 60 + +sec,
    }
  };

  export const searchItems = (todoData, search) => {
      if (search.length === 0) {
        return todoData;
      }

      return todoData.filter((item) => {
        return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
  };

  export const filterItems = (todoData, filter) => {
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
  };