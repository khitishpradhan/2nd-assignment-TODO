import React from "react";
import "./ListItems.css";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>{item.text} </p>

        <button
          className="dltBtn"
          onClick={() => {
            props.deleteItem(item.key);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;
