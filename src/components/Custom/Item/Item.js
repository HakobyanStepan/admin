import React, { useState } from "react";
import "./Item.scss";

const Item = ({ item, onDelete, onToggleChecked, isChecked }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleToggle = () => {
    onToggleChecked(item.id);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSaveClick = () => {
    setEditMode(false);
    item.name = editedItem.name;
    item.article = editedItem.article;
    item.count = editedItem.count;
    item.price = editedItem.price;
  };

  return (
    <div className="item">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      {editMode ? (
        <>
          <input
            className="edit"
            type="text"
            name="name"
            value={editedItem.name}
            onChange={handleInputChange}
          />
          <input
            className="edit"
            type="text"
            name="article"
            value={editedItem.article}
            onChange={handleInputChange}
          />
          <input
            className="edit"
            type="text"
            name="count"
            value={editedItem.count}
            onChange={handleInputChange}
          />
          <input
            className="edit"
            type="text"
            name="price"
            value={editedItem.price}
            onChange={handleInputChange}
          />
          <img
            alt="done"
            src={require("assets/img/done.png")}
            width={"20px"}
            height={"20px"}
            onClick={handleSaveClick}
          />
        </>
      ) : (
        <>
          <span className="name">{item.name}</span>
          <span className="article">{item.article}</span>
          <span className="count">{item.count}</span>
          <span className="price">{item.price}</span>
          <img
            alt="delete"
            src={require("assets/img/trash.png")}
            width={"20px"}
            onClick={handleDelete}
          />
          <img
            alt="edit"
            src={require("assets/img/edit.png")}
            width={"20px"}
            onClick={handleEditClick}
          />
        </>
      )}
    </div>
  );
};

export default Item;
