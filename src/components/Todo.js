import React from 'react';

const Todo = ({text, onRemove}) => (
    <li>
        { text }
        <span onClick={onRemove}>x</span>
    </li>
);

export default Todo;