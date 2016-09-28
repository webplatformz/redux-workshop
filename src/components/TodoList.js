import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

const TodoList = ({ todos }) => (
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

export default connect(
    mapStateToProps
)(TodoList);