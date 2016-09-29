import React from 'react';

const Todo = ({text, completed, onClick, onRemove}) => (
    <li onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
    }}>
        { text }
        <span onClick={onRemove}>x</span>
    </li>
);

export default Todo;