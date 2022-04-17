import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';

export default function ToDoList ({toDoItems, completed}) {
    return (
        <>
            <h2>To Do Items: </h2>
            <ul>
                {toDoItems.map((item, index) => {
                    return (
                        <ToDoListItem key={index} content={item.title} completed={completed}/>
                    )
                })}
            </ul>
        </>
    );
};