import React from 'react';
import TodoList from './TodoList';
import AddTodo from '../containers/AddTodo';

const App = () => (
    <div>
        <AddTodo />
        <TodoList />
    </div>
);

export default App;