import './App.css';
import {useState} from 'react';
import React from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import CompletedItems from './components/completedItems/completedItems';
import Form from './components/Form/Form';
import toDoListData from './data'

export default function App(props) {
  const [toDoItems, updateToDoItems] = useState(toDoListData);
  const [completedItems, updateCompletedItems] = useState([]);
  const completed = (item) => {
    const newArray = [item, ...completedItems];
    updateCompletedItems(newArray);
  };

  const HandleSubmit = (item) => {
    updateToDoItems([{ title: item }, ...toDoItems])
  };
  return (
    <div className="App">
      <h1>My To Do List:</h1>
      <Form handleSubmit={HandleSubmit} />
      <ToDoList toDoItems={toDoItems} completed={completed} />
      <CompletedItems completedItems={completedItems} />
    </div>
  );
};


