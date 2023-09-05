import React from "react";

function Completed({ completedItems, onMoveToIncomplete }) {
  return (
    <div className="completed-container ">
      <h2>Completed Items</h2>
      <ul>
        {completedItems.map((completedItem, index) => (
          <li
            key={index}
            onClick={() => onMoveToIncomplete(completedItem)}
            className="completed-item"
          >
            {completedItem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Completed;
