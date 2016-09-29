import {REMOVE_TODO} from './actions';

const initialState = {
    todos: [{
        text: 'my first todo!',
        id: 1,
        completed: false
    }]
};

function TodoApp(state = initialState, action) {
    switch (action.type) {
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => todo.id !== action.id)
            });
        default:
            return state;
    }
}

export default TodoApp;