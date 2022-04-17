import React from 'react';

export default function toDoListItem (props) {
    return (
        <li onClick={() => props.completed(props.content)}>
            {props.content}
            <button>Completed</button>
        </li>
    );
};