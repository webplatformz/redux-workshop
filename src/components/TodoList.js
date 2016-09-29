import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

let TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
            />
        )}
    </ul>
);

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

TodoList = connect(
    mapStateToProps
)(TodoList);

export default TodoList;