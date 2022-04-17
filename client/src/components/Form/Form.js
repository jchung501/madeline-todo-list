import {useState} from 'react';
import React from 'react';

export default ({handleSubmit}) = e => {
    const [toDo, updateToDo] = useState("")

    const handleChange = e => {
        updateToDo(e.target.value);
    };

    const handleForm = e => {
        e.preventDefault;
        handleSubmit(toDo);
        updateToDo("")
    };
    return (
        <form onSubmit={handleForm}>
            <label>New Item</label>
            <input type="text" value={todo} onChange={handleChange} id="toDo" />
        </form>
    )
}