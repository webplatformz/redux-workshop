import React from 'react';

const Link = ({children, active, onClick}) => (
    <a href="#"
        onClick={e => {
            e.preventDefault();
            onClick();
        }}>
        {children}
    </a>
);



export default Link;