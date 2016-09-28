import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, REMOVE_TODO } from './actions';

const initialState = {
    todos: [{
        text: 'hello youse',
        id: 1,
        completed: false
    }],
    visibilityFilter: 'SHOW_ALL'
};

let nextId = 2;
function TodoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false,
                        id: nextId++
                    }
                ]
            });
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if (action.id === todo.id) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        });
                    }

                    return todo;
                })
            });
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id)
            });
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        default:
            return state;
    }
}

export default TodoApp;