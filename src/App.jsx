import React, { useState } from "react";
import Item from "./Item";

const App = () => {
  const [inputItem, changeItem] = useState("");
  const [items, addItems] = useState([]);
  const getData = (e) => {
    changeItem(e.target.value);
  };
  const clickBtn = (e) => {
    e.preventDefault();
    addItems((prev) => {
      return [...prev, inputItem];
    });
    changeItem("");
  };
  return (
    <>
      <div className="left">
        <h1>todo list</h1>
        <form>
          <input
            type="text"
            className="todo-input"
            onChange={getData}
            value={inputItem}
          />
          <button type="submit" className="todo-button" onClick={clickBtn}>
            <i className="fa fa-plus-square"></i>
          </button>
        </form>
      </div>
      <div className="right">
        <ul className="todo-list">
          {items.map((value) => {
            return <Item itemValue={value} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
