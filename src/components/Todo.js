import React from 'react';

const Todo = ({text, completed, onClick, onRemove}) => (
    <li onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
    }}>
        { text }
        {" "}
        <a href="#"
            onClick={e => {
                e.preventDefault();
                onRemove();
            }}>x</a>
    </li>
);

export default Todo;