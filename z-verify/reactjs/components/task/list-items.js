import React from "react";

function ListItems(props) {
  const items = props.items;
  const list = items.map((item) => {
    return (
      <li key={item.key} className="p-2 bg-blue-100 flex">
        <input
        className="p-2 w-full bg-blue-100 focus:bg-white rounded outline-none"
          type="text"
          value={item.text}
          onChange={(e) => {
            props.setUpdate(e.target.value, item.key);
          }}
        />
        <span
        className="py-2 px-3 text-red-700 cursor-pointer"
          onClick={() => {
            props.deleteItem(item.key);
          }}
        >
          &times;
        </span>
      </li>
    );
  });

  return <ul>{list}</ul>;
}

export default ListItems;
