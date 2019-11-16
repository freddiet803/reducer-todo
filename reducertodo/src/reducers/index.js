export const initialState = [
  { item: 'Learn Reducer Pattern', completed: false, id: 1 },
  { item: 'Destory Reducer Pattern', completed: false, id: 2 }
];

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() }
      ];
    case 'TOGGLE_COMPLETION':
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
      });

    case 'CLEAR_COMPLETED':
      return state.filter(todo => {
        if (!todo.completed) {
          return todo;
        }
      });
  }

  return state;
};
