import {useState} from 'react';
import React from 'react';

const HandleSubmit = ({ handleSubmit }) => {
    const [toDo, updateToDo] = useState("")

    const handleChange = (e) => {
        updateToDo(e.target.value);
    };

    const handleForm = (e) => {
        e.preventDefault();
        handleSubmit(toDo);
        updateToDo("")
    };
    return (
        <form onSubmit={handleForm}>
            <label htmlFor="toDo">New Item</label>
            <input type="text" value={toDo} onChange={handleChange} id="toDo" />
        </form>
    )
};

export default HandleSubmit;