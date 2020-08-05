import React from "react";

const Item = (props) => {
  const remove = (event) => {
    const item = event.target;
    if (item.classList[0] === "complete-btn") {
      item.parentElement.classList.toggle("completed");
    }
    if (item.classList[0] === "trash-btn") {
      item.parentElement.remove();
    }
  };
  return (
    <div className="todo">
      <li className="todo-item">{props.itemValue}</li>
      <button className="complete-btn" onClick={remove}>
        <i className="fa fa-check"></i>
      </button>
      <button className="trash-btn" onClick={remove}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Item;
