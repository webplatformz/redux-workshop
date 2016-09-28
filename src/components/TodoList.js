import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

const List = ({ todos }) => (
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

const TodoList = connect(
    mapStateToProps
)(List);

export default TodoList;