import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {removeTodo} from '../actions';

let TodoList = ({ todos, onRemove }) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onRemove={() => onRemove(todo.id)}
            />
        )}
    </ul>
);

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemove: (id) => {
            dispatch(removeTodo(id));
        }
    };
};

TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoList;