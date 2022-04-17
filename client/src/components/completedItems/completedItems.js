import React from 'react';

export default function completedItems(props) {
    return (
        <div>
            <h2>Completed:</h2>
            <ul>
                {props.completedItems.map((item) => {
                    console.log(item);
                    return (
                        <li>
                            {item}
                            <button>Remove</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};