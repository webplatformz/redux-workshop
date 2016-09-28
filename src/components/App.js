import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import AddTodo from '../containers/AddTodo';
import Footer from '../components/Footer';

const App = () => (
    <div>
        <AddTodo />
        <TodoListContainer />
        <Footer />
    </div>
);

export default App;