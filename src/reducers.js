const initialState = {
    todos: [{
        text: 'my first todo!',
        id: 1,
        completed: false
    }]
};

function TodoApp(state = initialState, action) {
    return state;
}

export default TodoApp;