import React from 'react';

export default function toDoListItem (props) {
    return (
        // onClick, this will move the list items to completed
        <li onClick={() => props.completed(props.content)}>
            {props.content}
            <button>Completed</button>
        </li>
    );
};