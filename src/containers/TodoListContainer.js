import React from 'react';
import {connect} from 'react-redux';
import {visibilityFilters, toggleTodo, removeTodo} from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case visibilityFilters.SHOW_ALL:
            return todos;
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case visibilityFilters.SHOW_OPEN:
            return todos.filter(t => !t.completed);
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },
        onRemove: (id) => {
            dispatch(removeTodo(id));
        }
    };
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;

