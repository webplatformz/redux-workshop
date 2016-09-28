import { ADD_TODO, TOGGLE_TODO } from './actions';

const initialState = {
    todos: [{
        text: 'hello youse',
        id: 1
    }]
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
                todos: state.todos.map((todo, index) => {
                    if (action.index === index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        });
                    }

                    return todo;
                })
            });
        default:
            return state;
    }
}

export default TodoApp;