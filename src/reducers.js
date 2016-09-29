import { ADD_TODO } from './actions';

const initialState = {
    todos: [{
        text: 'write some pure reducers!',
        id: 1,
        completed: false
    }],
    visibilityFilter: 'SHOW_ALL'
};

let nextId = 2;
function TodoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            state.todos.push({
                text: action.text,
                completed: false,
                id: nextId++
            });
            break;
        default:
            return state;

    }
}

export default TodoApp;