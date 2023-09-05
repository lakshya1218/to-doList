import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Completed from "./Completed"; // Import the Completed component

function Incompleted() {
  const [items, setItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item, index) => {
        return index !== id;
      });
      setCompletedItems((prevCompletedItems) => [
        ...prevCompletedItems,
        prevItems[id],
      ]);
      return updatedItems;
    });
  }

  function moveToIncomplete(completedItem) {
    setCompletedItems((prevCompletedItems) => {
      const updatedCompletedItems = prevCompletedItems.filter(
        (item) => item !== completedItem
      );
      setItems((prevItems) => [...prevItems, completedItem]);
      return updatedCompletedItems;
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
      {/* Render the Completed component and pass the completedItems state and the moveToIncomplete function */}
      <Completed completedItems={completedItems} onMoveToIncomplete={moveToIncomplete} />
    </div>
  );
}

export default Incompleted;
