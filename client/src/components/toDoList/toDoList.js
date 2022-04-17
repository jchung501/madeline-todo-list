import React from 'react';
import toDoListItem from '../toDoListItem/toDoListItem';

export default toDoList = ({toDoItems, completed}) => {
    return (
        <div>
            <h2>To Do Items: </h2>
            <ul>
                {toDoItems.map((item, index) => {
                    <toDoListItem key={index} content={item.title} completed={completed} />
                })}
            </ul>
        </div>
    );
};